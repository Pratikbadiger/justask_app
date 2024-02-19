import React from "react";
import "../css/FeedBack.css";

const FeedBack=()=>{
    return(
        <div>
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
    )
}
export default FeedBack;