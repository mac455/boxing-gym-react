import React, { useEffect } from 'react';  
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to top of the page //
  }, [pathname]);  // This specifies when it should change, when path name changes 

  return null;
}
