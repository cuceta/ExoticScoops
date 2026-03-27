import React from "react";
import "../styles/mainPagesStyles.css";
import homePageDrip from "../assets/homePageDrip.png";

const Home = () => {
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
              <h1  style={{transform: "translateX(0%)"}}>EXOTIC &nbsp;</h1>
            </td>
            <td>
              <h1  >SCOOPS</h1>
            </td>
          </tr>
        </table>
        <h4>where every scoop is an adventure</h4>

        <div className="intro">
          {/* <!-- Paragraph formatting ||<p>|| tag --> */}
          <p>
            {/* <!-- Character formatting ||<ins>|| tag --> */}
            Ice cream you love given a <ins>exotic</ins> twist inspired by tropical fruits,
            global <br></br> flavors, and sweet surprises you won&#39;t find just
            anywhere.
            <br></br>
            <br></br>
            Whether you&#39;re in the mood for something fruity, floral, or with a
            little <br></br> kick, there&#39;s always a new flavor experience waiting for you.
          </p>
        </div>

        <div className="featuredFlavors">

        </div>
      </section>
    </>
  );
};

export default Home;
