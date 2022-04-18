import React from 'react';
import Banner from '../Banner/Banner';
import MyShots from '../MyShots/MyShots';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <MyShots></MyShots>
        </div>
    );
};

export default Home;