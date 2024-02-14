import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../components/Home";

const Appask = _ =>(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );

export default Appask;