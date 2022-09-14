import React, { useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const handleHamburgerClick = () => {
    setDisplayNav((prev) => !prev);
  };
  return (
    <div className={"head"}>
      <div className={"header"}>
        <div className={"sidebar-name"}>
          <h2>
            Portfolio
          </h2>
        </div>
        <div
          className={` ${displayNav ? "hamburger active" : "hamburger"}`}
          onClick={handleHamburgerClick}
        ></div>
        <div className={` ${displayNav ? "navigation show" : "navigation"}`}>
          <ul className={"sidebar"}>
            <li>
              <div onClick={handleHamburgerClick}>
                <a href="/"><b>Home</b> </a> 
              </div>
            </li>

            <li>
              <div onClick={handleHamburgerClick}>
                 <a href="#about"><b>About Me</b> </a> 
              </div>
            </li>

            <li>
              <div onClick={handleHamburgerClick}>
              <a href="#services"><b>Services</b></a>
              </div>
            </li>

            <li>
              <div  onClick={handleHamburgerClick}>
              <a href="#skills"><b>Skills</b></a>
              </div>
            </li>

            <li>
              <div  onClick={handleHamburgerClick}>
              <a href="#contact"><b>Contact Me</b></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
