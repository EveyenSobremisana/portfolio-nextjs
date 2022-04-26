import React, { Fragment, useEffect, useState } from "react";
import { openNav, scroll_, stickyNav } from "../utilits";
import styled from "styled-components";
import Link from "../components/Link";

const Header = ({ dark }) => {
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    openNav(!isToggled);
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll_);
    window.addEventListener("scroll", stickyNav);
  });

  return (
    <Fragment>
      <div className={"portfolio_topbar"}>
        <div className="wrapper">
          <div className="topbar_inner">
            <Link href="/">E.S</Link>
            {/* <div className="menu">
              <div className="list">
                <ul className="anchor_nav" id="anchor_nav">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                </ul>
              </div>
              <div className="trigger" onClick={() => toggleTrueFalse()}>
                <div
                  className={`hamburger hamburger--slider ${
                    isToggled ? " is-active" : ""
                  }`}
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="portfolio_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <Link href="/">E.S</Link>
            <div className="trigger" onClick={toggleTrueFalse}>
              <div
                className={
                  isToggled
                    ? "hamburger hamburger--slider is-active"
                    : "hamburger hamburger--slider"
                }
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isToggled ? "dropdown active" : "dropdown"}>
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Header;
