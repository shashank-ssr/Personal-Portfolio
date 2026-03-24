import { useEffect, useState } from "react";

export default function useCanHover() {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncCanHover = () => setCanHover(mediaQuery.matches);

    syncCanHover();
    mediaQuery.addEventListener("change", syncCanHover);

    return () => {
      mediaQuery.removeEventListener("change", syncCanHover);
    };
  }, []);

  return canHover;
}
