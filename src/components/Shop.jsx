import React from 'react';
import "../css/Shop.css"
import { Card, Col, Row } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Details from "../data/Shopdata.json"
import Navbar from './Navbar';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';


const Shop = ({ data }) => {
    const dispatch = useDispatch();
  
    const handleAddToCart = () => {
      dispatch(addToCart(Shop));
    }
return (
        <>
        <div className='navbar'>
        <Navbar/>
        </div>

        <h1 className='h1'>Welcom to Our Shop</h1>
        <br></br>
            <div className="card-section">
                <div className="card-container">
                    <div className='card-box' >
                        {
                            Details.map((container, index) => (
                                <Row key={index} gutter={8} style={{ marginTop: "30px" }}>
                                    {
                                        container.map((data) => (
                                            <Col xs={24} sm={6} md={6} lg={6}>
                                                <Card
                                                    hoverable
                                                    style={{ width: "100%", border: "none", borderRadius: "10px" }}
                                                    cover={<img alt="screen" src={data.img} style={{ height: 280 }} />}
                                                >
                                                    <Row gutter={8}>
                                                        <Col md={8}>
                                                            <div className="screen-name">
                                                                <h4>{data.name}</h4>
                                                            </div>
                                                        </Col>
                                                        <Col md={8}>
                                                            <div className="card-icons">
                                                                <div className='wishlist'>
                                                                    <HeartOutlined style={{ fontSize: '24px' }} />
                                                                </div>
                                                                <div className='cart'>
                                                                    
                                                                    <ShoppingCartOutlined  onClick={handleAddToCart} style={{ fontSize: '24px' }}/>
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





