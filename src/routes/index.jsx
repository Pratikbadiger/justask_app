import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";
import FeedBack from "../components/FeedBack";
import Cart from "../components/Cart";

const Appask = _ =>(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Shop" element={<Shop/>}/>
                <Route path="/FeedBack" element={<FeedBack/>}/>
                <Route path="/Cart" element={<Cart/>}/>

                
            </Routes>
        </Router>
    );

export default Appask;