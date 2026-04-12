import React from "react";
import "../styles/mainPagesStyles.css";

const ContactUs = () => {

  return (
    <>
      <section className="ContactUsPage" id="ContactUsPage">
        <h1 className="pageTitle">Contact Us</h1>
        <h4>Let us know what you think of our flavors</h4>

        <div className="content">
          <div className="socials">
            <h2>Socials</h2>
            <p>
              Find us on <mark>Instagram</mark>, <mark>Tiktok</mark>, and <mark>Facebook</mark> at
              <strong>@ExoticScoops</strong> or reach us by email at
              exoticscoops@gmail.com
            </p>
          </div>
          <div className="address">
            <h2>Headquaters</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
            </p>
            <p>123 E Random Ave, New York, NY, 10043</p>
            <button>
              <a href="https://www.google.com/maps" target="_blank">Come Visit</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
