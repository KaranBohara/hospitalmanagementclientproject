import React, { useState, useEffect } from 'react';
import Navlinks from './Navlinks';
import Topheader from './Topheader';
import Scrollheader from './Scrollheader';

function Header() {
  const [hamburger, setHamburger] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 968);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 200;
  Scrollheader(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    // setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
const hiddenStyle = shouldHideHeader ? 'hidden' : '';

  useEffect(() => {
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 968;
      if (ismobile !== isMobile) setIsMobile(ismobile);
    }, false);
  }, [isMobile]);
  const onhandle = () => {
    setHamburger(hamburger === true ? false : true)
  }
  if(!isMobile)
  {
    return(<header className={hiddenStyle}>
      <Topheader/>
      <div className="navbarContainer">
        <div className="barsBox" onClick={onhandle} >
          <i className={hamburger === true ? 'fas fa-bars' : 'fas fa-times'}></i>
        </div>
        <div className="navbar">
          <Navlinks />
        </div>
        <div className="searchSpace">
          <input type="search" placeholder="Search here" className="searchBar"></input>
          <div className="searchBox"><i className="fas fa-search"></i></div>
        </div>
      </div>
    </header>);
  }
  else
  {
  return (
    <header className={hiddenStyle}>
      <Topheader/>
      <div className="navbarContainer">
        <div className="barsBox" onClick={onhandle} >
          <i className={hamburger === true ? 'fas fa-bars' : 'fas fa-times'}></i>
        </div>
        <div className={hamburger!=true?'mobilenavbar':'mobilenavbarhide'}>
          <Navlinks />
        </div>
        <div className="searchSpace">
          <input type="search" placeholder="Search here" className="searchBar"></input>
          <div className="searchBox"><i className="fas fa-search"></i></div>
        </div>
      </div>
    </header>
  );
  }

}
export default Header;