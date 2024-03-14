import React from 'react'
import "../css/Footer.css"
import { Col, Row } from 'antd'
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-container">
                <div className="contact-us">
                    Here`s you Get Good Products
                </div>
                <div className="contact-box">
                    <Row>
                        <Col md={8} style={{ display: "flex", justifyContent: "center", alignItems: "center", fontWeight:"2000" }}>
                            <div className="menu">
                                <div className="menu-item">
                                    <Link href='#'>
                                        Home
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='Shop'>
                                        Shop
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='Cart'>
                                        Cart
                                    </Link>
                                </div>
                                <div className="menu-item">
                                    <Link href='FeedBack'>
                                    FeedBack
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} style={{fontWeight:"100"}}>
                          <div className='b'>
                        <p>Buy Good Products <br />Stay Good!</p>
                        </div>
                        </Col>
                        <Col md={8}>
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

                        </Col>
                    </Row>
                </div>
                <div className="copyright">
                    <p> © 2024.Terms and Condition.All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
