import React from "react";
import "../styles/mainPagesStyles.css"

import NYCImage from "/images/nyc.png" 
import ChicagoImage from "/images/chicago.png"
import OrlandoImage from "/images/orlando.png"
import MiamiImage from "/images/miami.png"
import NashvilleImage from "/images/nashville.png"
import LosAngelesImage from "/images/la.png"
import Footer from "../components/footer"



const Locations = () => {

    return (
        <>
        <section className="LocationsPage" id="LocationsPage">
        <h1 className="pageTitle" >
            Locations 
        </h1>
        <h4>Come see what we got to offer your taste buds at our location near you</h4>

        <div className="locationContainerCream">
            <div className="locationImage">
                <img src={NYCImage} alt="Image of NYC store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}> New York City</h5>
                <p style={{order:"2", gap:"15px", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, New York, NY, 10043</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                       Come Visit
                    </a>
                </button>
            </div>
        </div>

        <div className="locationContainerCream" style={{backgroundColor:"#FFFEF1"}}>
            <div className="locationImage">
                <img src={ChicagoImage} alt="Image of Chicago store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}> Chicago</h5>
                <p style={{order:"2", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, Chicago, IL, 60633</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                        Come Visit
                    </a>
                </button>
            </div>
        </div>

        <div className="locationContainerCream">
            <div className="locationImage">
                <img src={MiamiImage} alt="Image of Miami store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}> Miami</h5>
                <p style={{order:"2", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, Miami, FL, 12345</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                        Come Visit
                    </a>
                </button>
            </div>
        </div>

        <div className="locationContainerCream" style={{backgroundColor:"#FFFEF1"}}>
            <div className="locationImage">
                <img src={OrlandoImage} alt="Image of Orlando store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}> Orlando</h5>
                <p style={{order:"2", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, Orlando, FL, 39425</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                        Come Visit
                    </a>
                </button>
            </div>
        </div>

        <div className="locationContainerCream">
            <div className="locationImage">
                <img src={NashvilleImage} alt="Image of Nashville store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}> Nashville</h5>
                <p style={{order:"2", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, Nashville, TN 37201</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                        Come Visit
                    </a>
                </button>
            </div>
        </div>

        <div className="locationContainerCream" style={{backgroundColor:"#FFFEF1"}}>
            <div className="locationImage">
                <img src={LosAngelesImage} alt="Image of Los Angeles store"></img>
            </div>
            <div className="locationInfo">
                <h5 style={{order:"1"}}>Los Angeles</h5>
                <p style={{order:"2", marginTop: "-50px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,putate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                <p style={{order:"3"}}>123 E Random Ave, Los Angeles, CA, 39241</p>

                <button style={{order:"4"}}>
                    <a href="https://www.google.com/maps" target="_blank">
                        Come Visit
                    </a>
                </button>
            </div>
        </div>

        {/* <div style={{height:"400px"}}> </div> */}
        
</section>
<Footer/>
        </>   
    );
}

export default Locations