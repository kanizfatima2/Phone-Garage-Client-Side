import React from 'react';
import About from './About';
import CarouselItems from './CarouselItems';
import CategoriesItems from './Categories/CategoriesItems';


const Home = () => {
    return (
        <div>
            <CarouselItems></CarouselItems>
            <CategoriesItems></CategoriesItems>
            <About></About>
        </div>
    );
};

export default Home;