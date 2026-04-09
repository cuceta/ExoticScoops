import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/homePage";
import NavBar from "./components/navBar";
import Shop from "./pages/exploreFlavorsPage";
import Locations from "./pages/locationsPage"
import AboutUs from "./pages/aboutUsPage";
import ContactUs from "./pages/contactUsPage";
import Citations from "./pages/citationPage";
import Footer from "./components/footer";


const App = () => {
  return (
    <>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flavors" element={<Shop />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/citations" element={<Citations />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
