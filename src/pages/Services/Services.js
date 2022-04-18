import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import wedding from '../../images/services/wedding-service.jpg'
import engagement from '../../images/services/engagement-service.jpg'
import portrait from '../../images/services/portrait-service.jpg'
import { useNavigate } from 'react-router-dom';

const Services = () => {
    const navigate = useNavigate();

    const handleCheckOut = () =>{
        navigate('/checkout')
    }

    return (
        <div id='services' className='container'>
            <div className='my-4'>
            <div className='text-center'>
            <h2>My Services</h2>
            <p>DO YOU WANT ME TO SHOOT YOU?</p>
            </div>
            </div>
            <CardGroup className=''>
                <Card className='me-4 border-0 text-center'>
                    <Card.Img variant="top" src={wedding} />
                    <Card.Body>
                        <Card.Title>Wedding Package</Card.Title>
                        <h4>$800</h4>
                        <Card.Text>
                            <div className='text-start'>
                                <ul>
                                    <li>On-location Portrait Session</li>
                                    <li>Styling Recommendations</li>
                                    <li>200 High-res Artistically Edited Digital Images</li>
                                    <li>Shoot online gallery</li>
                                    <li>Royal free images on USB </li>
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={handleCheckOut} variant="primary">Checkout Now</Button>
                </Card>
                <Card className='me-4 border-0 text-center'>
                    <Card.Img variant="top" src={engagement} />
                    <Card.Body>
                        <Card.Title>Engagement Package</Card.Title>
                        <h4>$750</h4>
                        <Card.Text>
                        <div className='text-start'>
                                <ul>
                                    <li>On-location Portrait Session</li>
                                    <li> Everyday clothes</li>
                                    <li>50 High-res Artistically Edited Digital Images</li>
                                    <li>License for Unlimited Personal Use</li>
                                    
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>

                    <Button onClick={handleCheckOut} variant="primary">Checkout Now</Button>

                </Card>
                <Card className='border-0 text-center'>
                    <Card.Img variant="top" src={portrait} />
                    <Card.Body>
                        <Card.Title>Portrait Package</Card.Title>
                        <h4>$450</h4>
                        <Card.Text>
                        <div className='text-start'>
                                <ul>
                                   <li>Coverage of Morning Sessions</li>
                                   <li>Styling Recommendations</li>
                                   <li>Meals Sitdown celebrations in Digital Images</li>
                                   <li>License for Unlimited Personal Use</li>
                                    
                                </ul>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Button onClick={handleCheckOut}  variant="primary">Checkout Now</Button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Services;