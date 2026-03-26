import React from "react";
import "../styles/mainPagesStyles.css";
import homePageDrip from "../assets/homePageDrip.png";

const Home = () => {
  return (
    <>
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
              <h1 className="topText" >EXOTIC &nbsp;</h1>
            </td>
            <td>
              <h1>SCOOPS</h1>
            </td>
          </tr>
        </table>
        <h2>
            where every scoop is an adventure
        </h2>
      </section>
    </>
  );
};

export default Home;
