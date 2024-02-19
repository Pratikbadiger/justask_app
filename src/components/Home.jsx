import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import img from '../assets/images/main-headphone.avif';
import Footer from "./Footer";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Details from "../data/Shopdata1.json"
import { Card, Col, Row } from 'antd';


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
    <h1>Top Products</h1>
    <div className='card-box'>
                        {
                            Details.map((container, index) => (
                                <Row key={index} gutter={20} style={{ marginTop: "30px" }}>
                                    {
                                        container.map((data) => (
                                            <Col xs={24} sm={8} md={8} lg={8}>
                                                <Card
                                                    hoverable
                                                    style={{ width: "100%", border: "none", borderRadius: "10px" }}
                                                    cover={<img alt="screen" src={data.img} style={{ height: 280 }} />}
                                                >
                                                    <Row gutter={30}>
                                                        <Col md={12}>
                                                            <div className="screen-name">
                                                                <h4>{data.name}</h4>
                                                            </div>
                                                        </Col>
                                                        <Col md={12}>
                                                            <div className="card-icons">
                                                                <div className='wishlist'>
                                                                    <HeartOutlined style={{ fontSize: '24px' }} />
                                                                </div>
                                                                <div className='cart'>
                                                                    <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Card>

                                            </Col>
                                        ))
                                    }
                                </Row>
                            ))
                        }

                    </div>
    <button id="button"><a href="Shop">See more</a></button>
    <Footer/>
    </div>
    
    );
}
export default Home;