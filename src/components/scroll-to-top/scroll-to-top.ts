import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    !pathname.includes("/campaigns/all/setup/") && window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
