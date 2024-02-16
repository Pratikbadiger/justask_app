import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../components/Home";
import Shop from "../components/Shop";

const Appask = _ =>(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Shop" element={<Shop/>}/>
            </Routes>
        </Router>
    );

export default Appask;