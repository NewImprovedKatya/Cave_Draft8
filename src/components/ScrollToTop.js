import React from "react";
import { useNavigate } from "react-router-dom";

const ScrollToTop = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(0);
  }, []);

  return children;
};

export default ScrollToTop;
