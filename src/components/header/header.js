import React from "react";
import "./header.css";
import { FaBehanceSquare } from "react-icons/fa";
import {
  BsTwitter,
  BsFacebook,
  BsYoutube,
  BsSearch,
  BsPinterest,
} from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="" id="headerBG">
        <nav className="navbar navbar-expand-sm" id="navv">
          <div className="container-fluid nav-link">
            <a className=" navbar-brand " id="Runo" href="#">
              Runo
            </a>
            <div className="allitems ">
              <ul className="navbar-nav  " id="navitems">
                <li className="nav-item" id="home">
                  <a className="nav-link" href="">
                    Home
                    <p className="mt-1" id="homeborder"></p>
                  </a>
                </li>
                <li className="nav-item" id="about">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item" id="articles">
                  <a className="nav-link " href="#">
                    Articles
                  </a>
                </li>
                <li className="nav-item" id="contactus">
                  <a className="nav-link" href="#">
                    contact Us
                  </a>
                </li>
                <p id="borderotate"></p>

                <BsFacebook className="icons" id="bsfacebook" />
                <BsTwitter className="icons" id="bstwitter" />
                <BsYoutube className="icons" id="bsyoutube" />
                <BsPinterest className="icons" id="bspinterest" />
                <FaBehanceSquare className="icons" id="FaBehanceSquare" />
                <p id="borderotate2"></p>

                <BsSearch className="iconss" id="bssearch" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
