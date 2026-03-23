function isMobileDevice() {
  if (typeof window === "undefined") {
    return false;
  }

  const mediaMatch = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
  const userAgentMatch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

  return mediaMatch || userAgentMatch;
}

function buildMailtoHref({ email, subject = "", body = "" }) {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  const query = params.toString();

  return `mailto:${email}${query ? `?${query}` : ""}`;
}

function buildGmailHref({ email, subject = "", body = "" }) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function openEmailWithFallback({ email, subject = "", body = "" }) {
  if (typeof window === "undefined") {
    return;
  }

  const mailtoHref = buildMailtoHref({ email, subject, body });

  if (isMobileDevice()) {
    window.location.href = mailtoHref;
    return;
  }

  const gmailHref = buildGmailHref({ email, subject, body });
  let fallbackCancelled = false;
  let timeoutId = 0;

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      cancelFallback();
    }
  };

  const cleanup = () => {
    window.clearTimeout(timeoutId);
    window.removeEventListener("blur", cancelFallback);
    window.removeEventListener("pagehide", cancelFallback);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };

  const cancelFallback = () => {
    fallbackCancelled = true;
    cleanup();
  };

  timeoutId = window.setTimeout(() => {
    cleanup();

    if (!fallbackCancelled) {
      window.open(gmailHref, "_blank", "noopener,noreferrer");
    }
  }, 550);

  window.addEventListener("blur", cancelFallback);
  window.addEventListener("pagehide", cancelFallback);
  document.addEventListener("visibilitychange", handleVisibilityChange);

  window.location.href = mailtoHref;
}
