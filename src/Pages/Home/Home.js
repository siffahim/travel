import React from 'react';
import Banner from '../Banner/Banner';
import More from '../More/More';
import Rank from '../Rank/Rank';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Rank />
            <More />
        </div>
    );
};

export default Home;