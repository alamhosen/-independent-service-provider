import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import wedding from '../../images/banner/wedding.jpg'
import portrait from '../../images/banner/portrait.jpg'
import engagement from '../../images/banner/engagement.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
        return (
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-10"
                            src={wedding}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Wedding Photography</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={portrait}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Portrait Photography</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={engagement}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Engagement Photography</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
            </div>
        );
    };

    export default Banner;