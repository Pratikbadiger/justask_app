import React from "react";
import "../css/FeedBack.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FeedBack=()=>{
    return(
       
        <div>
            <Navbar/>
        <div>
            <div className="div">
            <center>
            <h1>FeedBack Form</h1>
            <fieldset className="field">
            
                    <label htmlFor="" className="demo1">Name : </label>
                    <input type="text" className="demo"/><br></br><br></br>
                    <label htmlFor="" className="demo1">Email : </label>
                    <input type="email" className="demo"/><br></br><br></br>
                    <textarea name="" id="" cols="30" rows="5"></textarea><br></br>
                    <button >Submit</button>
            </fieldset>
            </center>
            </div>
            </div>
        
        <div className="footer">
        <Footer/>
        </div>
        </div>
        
    )
}
export default FeedBack;