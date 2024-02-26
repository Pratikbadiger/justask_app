import React from 'react';
import "../css/Shop.css"
import { Card, Col, Row } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Details from "../data/Shopdata.json"
import Navbar from './Navbar';
import Footer from './Footer';
import Cart from './Cart';

const Shop = ({ data }) => {
    const cartItems = [];
return (
        <>
        <div className='navbar'>
        <Navbar/>
        </div>
        <div>
            {/* Your other content */}
            <Cart cartItems={cartItems} />
        </div>
        <h1 className='h1'>Welcom to Our Shop</h1>
            <div className="card-section">
                <div className="card-container">
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
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Shop
