import React from "react";
import "../css/Footer.css";
import { Col, Row } from 'antd'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'

const Footer=()=>{
  return(
<div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
          <h1 className="list-unstyled">
             Shop Non-Stop
            </h1>
            <h4>Trusted by more than 1 Crore Indians<br></br>
Cash on Delivery | Free Delivery</h4>
          </div>
          </div>

          <div className="detail">
            <h4 id="h4">WELL ANOTHER COLUMN</h4>
            <ui id="ui">
             Careers<br></br>Become a supplier<br></br>Hall of Fame<br></br>
Legal and Policies<br></br>Notices and Returns
            </ui>
          </div>
          <div className="social-link">
                                <div className="icon-link">
                                    <Link>
                                        <InstagramOutlined style={{ color: "#000", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <FacebookOutlined style={{ color: "#000", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <LinkedinOutlined style={{ color: "#000", fontSize: "30px" }} />
                                    </Link>

                                </div>
                                <div className="icon-link">
                                    <Link>
                                        <YoutubeOutlined style={{ color: "#000", fontSize: "30px" }} />
                                    </Link>
                                </div>
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