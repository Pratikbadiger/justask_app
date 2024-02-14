import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import img from '../assets/images/main-headphone.avif';
import Footer from "./Footer";

const Home =()=>{
    return(
      <div>
    <div>
      <Navbar/>
    </div>
    <div className="image-1">
      <img src={img} alt="" />
      <b><h2>ULTIMETE SELECT</h2></b>
      <h3>A premium Audio Experince</h3>
    </div>
    <Footer/>
    </div>
    
    );
}
export default Home;