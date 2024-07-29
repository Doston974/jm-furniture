import React from "react";
import Header from "./common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Footer from "./common/Footer";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <div className="md:block hidden">
          <Footer />
        </div>
      </Router>
    </>
  );
}
