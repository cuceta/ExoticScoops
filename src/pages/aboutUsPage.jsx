import React from "react";
import "../styles/mainPagesStyles.css";
import storyImage from "../assets/aboutUsStoryImage.png";

const AboutUs = () => {
  return (
    <>
      <section className="AboutUsPage" id="AboutUsPage">
        <h1 className="pageTitle">About Us</h1>
        <h4>Learn all about us</h4>
        <section className="missionAndVision">
          <div className="mission">
            <h5>Our Mission</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br/>
              {/*<!-- paragraph formating elements (br and br)  -->*/}
              <hr/>
              Donec quam felis,putate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim.e penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam
              felis,putate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. e penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,putate
              eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
              eleifend ac, enim.
            </p>
          </div>
          <div className="vision">
            <h5>Our Vision</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis,putate eleifend tellus.<br/><br/> Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac. Donec quam
              felis,putate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. <br/><br/>e penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Done
            </p>
          </div>
        </section>
        <section className="ourStory">
          <h4>Our Story</h4>
          <div className="storyContent">
            <div className="storyText">
              <p>
                Exotic Scoops started with a simple idea: ice cream should feel
                like an adventure. What began as a late-night conversation
                between friends about travel, tropical fruit markets, and the
                lack of bold flavors in most dessert shops slowly turned into
                something real. We kept asking ourselves one question: why
                should vanilla and chocolate have all the fun?
              </p>
              <hr/>
              <p>
                Our first small pop-up launched with just six flavors, including
                Mango Chili and Lychee Rose. We weren’t sure how people would
                react to the unexpected combinations, but within hours we sold
                out. Customers weren’t just buying ice cream. They were sharing
                it, photographing it, and bringing friends back the next week to
                try something new.
              </p>
              <p>
                From that first pop-up, Exotic Scoops grew into a storefront
                designed to feel like a soft pastel escape. Our pink and yellow
                walls, rounded counters, and fun branding quickly became part of
                the experience. Soon after, we introduced seasonal “Flavor
                Flights,” limited-edition drops, and collaborations inspired by
                global ingredients.
              </p>
              <p>
                As word spread, so did we. What started as one adventurous scoop
                turned into multiple locations across the country, each one
                carrying the same mission: to turn dessert into a moment worth
                sharing.
              </p>
              <hr/>
              <p>
                Today, Exotic Scoops continues to blend classic comfort with
                exotic twists, always creating flavors that surprise, delight,
                and bring people together. Because we believe ice cream should
                be more than sweet, it should be unforgettable!
              </p>
            </div>
            <div className="storyPicture">
              <img src={storyImage} alt="Picture of icecream counter"></img>
            </div>
          </div>
        </section>
        <section className="charities">
          <h4>Charities</h4>
          <div className="charitiesContent">
            <div>
              <p>
                At Exotic Scoops, adventure goes beyond flavor. From the very
                beginning, we&rsquo;ve believed that sweet moments should also
                create positive impact. That&rsquo;s why a portion of our
                seasonal proceeds and select flavor launches support
                organizations that uplift communities and protect the planet.
              </p>
              <p>
                Each year, we also choose a limited-edition “Flavor for Good,”
                where a percentage of every scoop sold goes directly to one of
                our partner organizations. Because at Exotic Scoops, sharing
                something sweet should make the world a little sweeter too.
              </p>
            </div>
            <div>
              <p style={{marginBottom:"0"}}>We proudly contribute to:</p>
              
              <ul>
                <li style={{marginTop:"-10px"}}>
                  No Kid Hungry &mdash; Supporting programs that help end
                  childhood hunger across the United States.
                </li>
                <li>
                  Feeding America &mdash; Partnering to provide meals to families and
                  individuals facing food insecurity.
                </li>
                <li>
                  Charity: Water &mdash; Helping fund clean and safe drinking water
                  projects around the world.
                </li>
                <li>
                  The Trevor Project &mdash; Providing crisis support and advocacy for
                  LGBTQ+ youth.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AboutUs;
