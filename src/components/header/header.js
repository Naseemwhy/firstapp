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
      <div className="header-container">
        <h2 className="logo">Runo</h2>

        <nav>
          <ul>
            <li className="">
              <a className="" href="">
                Home
                <p className="mt-1" id="homeborder"></p>
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                About
              </a>
            </li>
            <li className="">
              <a className=" " href="#">
                Articles
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                contact Us
              </a>
            </li>
            <li>
              <p id="borderotate"></p>
            </li>

            <li>
              <BsFacebook className="icons" id="bsfacebook" />
            </li>
            <li>
              <BsTwitter className="icons" id="bstwitter" />
            </li>

            <li>
              <BsYoutube className="icons" id="bsyoutube" />
            </li>
            <li>
              <BsPinterest className="icons" id="bspinterest" />
            </li>
            <li>
              <FaBehanceSquare className="icons" id="FaBehanceSquare" />
            </li>
            <li>
              <p id="borderotate2"></p>
            </li>

            <li>
              <BsSearch className="iconss" id="bssearch" />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
