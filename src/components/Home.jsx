import "../css/Home.css";
import Navbar from "./Navbar";
import img from '../assets/images/main-headphone.png';
import img1 from "../assets/images/oip.png";
import img2 from "../assets/images/head3.png";
import Footer from "./Footer";
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Details from "../data/Shopdata1.json"
import { Card, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';


const PhotoSlider = ({ photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Change photo every 2 seconds (adjust as needed)
  
      return () => clearInterval(intervalId);
    }, [photos.length]);
  
    return (
      <img
        src={photos[currentPhotoIndex]}
        alt={`Photo ${currentPhotoIndex + 1}`}
        style={{ width: '40%', height:'400px' }}
        loading="lazy"
      />
    );
  };
  


const Home =()=>{
    return(
      <div>
    <div>
      <Navbar/>
    </div>
    <div className="image-1">
    <PhotoSlider photos={[img, img1,img2]} />
      <b><h2>The Westmire</h2></b>
      <h3>A56 Headset</h3>
      <button className="buy">Buy</button>
      <button className="buy1"><a href="Shop">See more</a></button>
    </div>
    <div className="top">
    <h1>Top Products</h1>
    </div>
    <div className='card-box'>
                        {
                            Details.map((container, index) => (
                                <Row key={index} gutter={20} style={{ marginTop: "30px" }}> 
                                    {
                                        container.map((data) => (
                                            <Col xs={24} sm={8} md={8} lg={8}>
                                                <Card
                                                    hoverable
                                                    style={{ width:"80%", border: "none", borderRadius: "10px" }}
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
    <button id="button1"><a href="Shop">See more</a></button>
    <Footer/>
    </div>
    
    );
}

export default Home;