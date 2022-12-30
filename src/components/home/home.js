import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./home.css";
import Cards from "../cards/cards";

function Home() {
  return (
    <>
      <div className="home-page bg-light">
        <div className="banne-page ">
          <div className=" mt-0">
            <div className="">
              <Header />
              <img
                id="asss"
                src="../assests/images/banner.png"
                alt=""
                width="100%"
                height="600px"
                className="banner-page "
              />

              <div className="" id="adventureBG">
                <div className="" id="adventure">
                  ADVENTURE
                </div>
              </div>
              <h2 className="" id="Richird">
                Richird Norton photorealistic<br></br> rendering as real photos
              </h2>

              <p className="" id="date">
                <small>08.08.2021 </small>
              </p>

              <p id="line"></p>

              <p className=" " id="paragraph">
                Progressively incentivize cooperative systems through
                technically sound<br></br> functionalities. The credinly
                productivate scamless data.
              </p>
            </div>
          </div>
        </div>
        <div className="PT">
          <div className="popularTopics">
            <div className=" " id="popularHeading">
              Popular topics
            </div>
            <div className="navbar navbar-expand-sm " id="topics">
              <div className="" id="topicsName">
                <ul className="navbar-nav me-auto ">
                  <li className="nav-item">
                    <a className="All " href="javascript:void(0)">
                      All
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="Adventure" href="#">
                      Adventure
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="Travel" href="">
                      Travel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="
                    Fashion
                  "
                      href="#"
                    >
                      Fashion
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="Technology" href="#">
                      Technology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className=" Branding" href="#">
                      Branding
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="Viewall" href="">
                      View All
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Cards
          Image="../assests/images/Blog Image(5).png"
          date="08-08-2021"
          title="Richird Norton photorealistic rendering as real photos"
          description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
        />
        <Cards
          Image="../assests/images/Blog Image(5).png"
          date="08-08-2021"
          title="Richird Norton photorealistic rendering as real photos"
          description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
        />
        <Cards
          Image="../assests/images/Blog Image(5).png"
          date="08-08-2021"
          title="Richird Norton photorealistic rendering as real photos"
          description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
        />
        <div className="home-page mt-5">
          <div className="banner-page ">
            <div className=" mt-0">
              <div className="" id="banner">
                <img
                  src="../assests/images/image.png"
                  alt=""
                  width="100%"
                  height="600px"
                  className="banner-page "
                />
                <div className="" id="fashionBG">
                  <div id="fashion">
                    <span>FASHION</span>
                  </div>
                </div>
                <h2 className="text-white" id="banner2Richird">
                  Richird Norton photorealistic<br></br> rendering as real
                  photos
                </h2>
                <p className=" " id="paragraph2">
                  <small>
                    progressively incentivize cooperative systems through
                    technically sound<br></br> functionalities. The credinly
                    productivate scamless data.
                  </small>
                </p>
                <p id="line2"></p>

                <p id="date2">
                  <small>08.08.2021 </small>
                </p>
              </div>
            </div>
          </div>
          <div className="container ">
            <h1 className=" p-5">Editor's Pick</h1>
            <div className="mt-5"></div>
          </div>
          <div className="card-group p-5">
            <div className="card m-2  " id="visit">
              <img
                src="../assests/images/Blog image (7).png"
                className="card-img-top "
                alt="..."
                id="imgvisit"
              />
              <h7 className=" text-white" id="fash">
                <small>FASHION</small>
              </h7>
              <div className="text-white" id="heding">
                <h7 className="">08.08.2021</h7>
                <h3 className="fs-5 mt-4">
                  Richird Norton photorealistic<br></br> rendering as real
                  photos
                </h3>
                <p className="">
                  <small className="">
                    progressively incentivize cooperative systems through
                    <br></br>
                    technically sound functionalities. The credinly productivate
                    scamless data.
                  </small>
                </p>
              </div>
            </div>
            <div className="card m-2 ">
              <img
                src="../assests/images/Blog image (8).png"
                className="card-img-top"
                alt="..."
                id="imgvisit"
              />
              <h7 className=" " id="fash">
                <small>FASHION</small>
              </h7>
              <div className="text-white" id="heding">
                <h7 className="">
                  <small className="mt-3">08.08.2021</small>
                </h7>
                <h3 className="fs-5 mt-4">
                  Richird Norton photorealistic<br></br> rendering as real
                  photos
                </h3>
                <p>
                  <small>
                    progressively incentivize cooperative systems through
                    <br></br>
                    technically sound functionalities. The credinly productivate
                    scamless data.
                  </small>
                </p>
              </div>
            </div>
            <div className="card m-2 rounded-pill">
              <img
                src="../assests/images/Blog image (9).png"
                className="card-img-top "
                alt="..."
                id="imgvisit"
              />
              <h7 className=" text-white" id="fash">
                <small>FASHION</small>
              </h7>
              <div className="text-white" id="heding">
                <h7 className="">
                  <small>08.08.2021</small>
                </h7>
                <h3 className="fs-5 mt-4">
                  Richird Norton photorealistic <br></br>rendering as real
                  photos
                </h3>
                <p>
                  <small>
                    progressively incentivize cooperative systems through
                    <br></br>
                    technically sound functionalities. The credinly productivate
                    scamless data.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
