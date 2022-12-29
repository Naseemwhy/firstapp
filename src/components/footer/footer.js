import React from "react";
import { FaBehanceSquare } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsYoutube, BsPinterest } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <footer className="page-footer bg-dark ">
      <div className="container-fluid text-center text-md-left p-5">
        <div className="row">
          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3 ">
            <th className="text-white">Contact the Publisher</th>

            <ul className="list-unstyled " id="contactPublisher">
              <li className="text-white ">
                <a>mike@runo.com</a>
              </li>
              <li className="text-white">
                <a>+944 450 904 505</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <th className="text-white ">Explorate</th>

            <ul className="list-unstyled" id="explorate">
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Partners</a>
              </li>
              <li>
                <a href="#!">Job Opportunities</a>
              </li>
              <li>
                <a href="#!">Advertise</a>
              </li>
              <li>
                <a href="#!">Membership</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <th className="text-white ">Headquarter</th>

            <p className="text-white" id="headquarter">
              191 Middleville Road,<br></br> NY 1001,sydney<br></br> Australia{" "}
            </p>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <th className="text-white ">Connections</th>

            <ul className="" id="connections">
              <BsFacebook className="iconss" id="bsfacebook2" />
              <BsTwitter className="iconss" id="bstwitter2" />
              <BsYoutube className="iconss" id="bsyoutube2" />
              <BsPinterest className="iconss" id="bspinterest2" />
              <FaBehanceSquare className="iconss" id="FaBehanceSquare2" />
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright " id="copyright">
        <a id="year">2021</a>
        <a id="line3"></a>

        <a id="publisherStudio">Runo Publisher Studio</a>
        <a href="#" id="subscribe">
          Subscribe Now
        </a>
      </div>
    </footer>
  );
}

export default Footer;
