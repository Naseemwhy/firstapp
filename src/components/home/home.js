import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./home.css";
import Cards from "../cards/cards";
import { IMAGES } from "../../constants/images";

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
                src={IMAGES.banner}
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
        <div className="d-flex flex-wrap m-5 p-2 cardsff">
          <Cards
            Image={IMAGES.blog1}
            date="08-08-2021"
            title="Dream destinations to visit this
year in Paris"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog2}
            date="08-08-2021"
            title="Breathtaking first-person photos
around Europe"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog3}
            date="08-08-2021"
            title="What collectors need to know about
authenticity"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog4}
            date="08-08-2021"
            title="Instagram artists with great
photography skills"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog5}
            date="08-08-2021"
            title="Thins to know before visiting
Cave in Germany"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog6}
            date="08-08-2021"
            title="Nina Smith vibrant work collab
with Nike Dunk"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog7}
            date="08-08-2021"
            title="Richird Norton photorealistic rendering as real photos"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
          <Cards
            Image={IMAGES.blog8}
            date="08-08-2021"
            title="25 quality collectors toys inspired
by famous films"
            description="progressively incentivize cooperative systems through technically
            sound functionalities. Credibly productivate seamless data with
            flexible schemas."
          />
        </div>
        <div className="home-page mt-5">
          <div className="banner-page ">
            <div className=" mt-0">
              <div className="" id="banner">
                <img
                  src={IMAGES.banner1}
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
                src={IMAGES.blog9}
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
                src={IMAGES.blog10}
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
            <div className="card m-2 ">
              <img
                src={IMAGES.blog11}
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
