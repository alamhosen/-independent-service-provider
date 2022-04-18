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
                            className="d-block w-100"
                            src={wedding}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Wedding Photography</h3>
                            <p>Your Style of Wedding</p>
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
                            <p>A portrait is not made in the camera but on either side of it</p>
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
                                Priceless Event of Your Life
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
            </div>
        );
    };

    export default Banner;