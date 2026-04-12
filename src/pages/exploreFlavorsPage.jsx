import React, { useState } from "react";
import "../styles/mainPagesStyles.css";
import Footer from "../components/footer";
import flavors from "../data/flavors.json";

const Shop = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  return (
    <>
      <section className="flavorsPage" id="FlavorsPage">
        <h1 className="pageTitle">Explore Our Flavors</h1>
        <h4>Check out our exotic flavors and see if any sound yummy</h4>

        <div className="flavorGrid">
          {flavors.map((flavor) => (
            <div className="flavorCard" key={flavor.id}>
              <img src={flavor.image} alt={flavor.name} />
              <h3>{flavor.name}</h3>
              <p>{flavor.shortDesc}</p>

              <button onClick={() => setSelectedFlavor(flavor)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
        <Footer/>
      </section>

      {/* MODAL */}
      {selectedFlavor && (
        <div className="modalOverlay" onClick={() => setSelectedFlavor(null)}>
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedFlavor.name}</h2>
            <p><strong>Ingredients:</strong> {selectedFlavor.ingredients}</p>
            <p><strong>Allergens:</strong> {selectedFlavor.allergens}</p>
            <p><strong>Flavor Profile:</strong> {selectedFlavor.flavorProfile}</p>
            <p><strong>Available at: </strong> {selectedFlavor.availableAt.join(", ")}</p>

            <button onClick={() => setSelectedFlavor(null)}>Close</button>
          </div>
        </div>
      )}

    </>
  );
};

export default Shop;