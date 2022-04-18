import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/shots/1.jpg'
import img2 from '../../images/shots/2.jpg'
import img3 from '../../images/shots/3.jpg'
import img4 from '../../images/shots/4.jpg'
import img5 from '../../images/shots/5.jpg'
import img6 from '../../images/shots/6.jpg'

const MyShots = () => {
    return (
        <div className=''>
            <h2 className='text-center my-4'>My Awesome Shots</h2>
            <Container>
                <Row>
                    <Col className='col-lg-4 col-md-6 col-sm-12 col-12 mb-4 '>
                        <img
                            src={img1}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""
                        />

                        <img
                            src={img2}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </Col>
                    <Col className='col-lg-4 col-md-6 col-sm-12 col-12 mb-4 '>
                        <img
                            src={img3}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src={img4}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </Col>
                    <Col className='col-lg-4 col-md-6 col-sm-12 col-12 mb-4 '>
                        <img
                            src={img5}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src={img6}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default MyShots;