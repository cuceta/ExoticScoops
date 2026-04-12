import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import homePageDrip from "../assets/homePageDrip.png";
import flavors from "../data/flavors.json";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import Footer from "../components/footer";

import "../styles/mainPagesStyles.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();

  const featured = flavors.slice(0, 7);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
  };

  const getStyle = (index) => {
    const diff = index - currentIndex;

    if (diff === 0) {
      return { transform: "translateX(0) scale(1.1)", zIndex: 3 };
    }
    if (diff === -1) {
      return { transform: "translateX(-260px) scale(0.85)", zIndex: 2 };
    }
    if (diff === 1) {
      return { transform: "translateX(260px) scale(0.85)", zIndex: 2 };
    }

    return { opacity: 0, pointerEvents: "none" };
  };
  return (
    <>
      {/* <!-- advanced HTML5 element ||BLOCK - SECTION|| --> */}
      <section className="HomePage" id="HomePage">
        <div className="drip">
          {/* <!-- advanced HTML5 element ||SVG|| --> */}
          <svg
            height="50px"
            width="100%"
            /* <!-- CSS within HTML element --> */
            style={{ backgroundColor: "#EFAFC7" }}
          />
          <img src={homePageDrip} alt="Drip background" />
        </div>
        {/* <!-- advanced HTML5 element ||TABLE|| --> */}
        <table>
          <tr>
            <td>
              {/* <!-- CSS within HTML element --> */}
              <h1 style={{ transform: "translateX(0%)" }}>EXOTIC &nbsp;</h1>
            </td>
            <td>
              <h1>SCOOPS</h1>
            </td>
          </tr>
        </table>
        <h4 className="PageSubheading" style={{ marginTop: "-70px" }}>
          where every scoop is an adventure
        </h4>

        <div className="intro">
          {/* <!-- Paragraph formatting ||<p>|| tag --> */}
          <p>
            {/* <!-- Character formatting ||<ins>|| tag --> */}
            Ice cream you love given a <ins>exotic</ins> twist inspired by
            tropical fruits, global <br></br> flavors, and sweet surprises you
            won&#39;t find just anywhere.
            <br></br>
            <br></br>
            Whether you&#39;re in the mood for something fruity, floral, or with
            a little <br></br> kick, there&#39;s always a new flavor experience
            waiting for you.
          </p>
          <div className="introButtonsContainer">
            <button onClick={() => navigate("/flavors")}>
              Explore Our Flavors
            </button>
            <button onClick={() => navigate("/locations")}>
              Find a Store Near You
            </button>
          </div>
        </div>
        {/* <Footer/> */}

        <div className="featuredFlavors">
          <h2>Featured and Seasonal Flavors</h2>

          <div className="carouselWrapper">
            <button className="carouselBtn left" onClick={prevSlide}>
              <img src={leftArrow} alt="left" />
            </button>

            <div className="carousel">
              {featured.map((flavor, index) => (
                <div
                  key={flavor.id}
                  className="carouselCard"
                  style={getStyle(index)}
                >
                  <img src={flavor.image} alt={flavor.name} />
                  <h3>{flavor.name}</h3>
                  {/* <NavLink to="/flavors"> */}
                    <button onClick={() => navigate("/flavors")}>Learn more</button>
                  {/* </NavLink> */}
                </div>
              ))}
            </div>

            <button className="carouselBtn right" onClick={nextSlide}>
              <img src={rightArrow} alt="right" />
            </button>
          </div>

          {/* DOTS */}
          <div className="dots">
            {featured.map((_, i) => (
              <span
                key={i}
                className={i === currentIndex ? "dot active" : "dot"}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>
        
      
      </section>
    </>
  );
};

export default Home;
