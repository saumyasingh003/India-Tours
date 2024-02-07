import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Adventure from "./components/Adventure";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Beeches from "./components/Beeches";
import Medical from "./components/Medical";
import Eco from "./components/Eco";
import Culture from "./components/Culture";
import Video from "./components/Video";
import Login from "./components/login";
import Register from "./components/Register";
import Wildlife from "./components/Wildlife";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Adventure" element={<Adventure />} />
        <Route path="/Beeches" element={<Beeches />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Medical" element={<Medical />} />
        <Route path="/Eco" element={<Eco />} />
        <Route path="/Wildlife" element={<Wildlife />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
