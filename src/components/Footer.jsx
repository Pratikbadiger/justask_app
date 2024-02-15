import React from "react";
import "../css/Footer.css";

const Footer=()=>{
  return(
<div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
            <h4></h4>
            <h1 className="list-unstyled">
             Shop Non-Stop
            </h1>
          </div>

          <div className="col">
            <h4>Trusted by more than 1 Crore Indians<br></br>
Cash on Delivery | Free Delivery</h4>
          </div>
          </div>

          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled1">
             Careers<br></br>Become a supplier<br></br>Hall of Fame<br></br>
Legal and Policies<br></br>Notices and Returns
            </ui>
          </div>
          
          </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      
    </div>
  )
}
export default Footer;