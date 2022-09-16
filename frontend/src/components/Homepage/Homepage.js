import React from 'react';
import CarouCompo from '../CarouCompo/CarouCompo';
import Footer from '../Footer/Footer';
import MusicSlide from '../MusicSlide/MusicSlide';
import NavCompo from '../NavCompo/NavCompo';
import NewsCompo from '../NewsCompo/NewsCompo';
import Speechtotext from '../Speechtotext/Speechtotext';
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <NavCompo></NavCompo>
            <CarouCompo></CarouCompo>
            <Speechtotext></Speechtotext>
            <MusicSlide></MusicSlide>
            <NewsCompo></NewsCompo>
            <Footer></Footer>
        </div>
    );
};

export default Homepage;