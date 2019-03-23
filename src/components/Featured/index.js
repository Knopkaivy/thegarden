import React from 'react';
import Carousel from './Carousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>
            <Carousel />
            <div className='name'>
                <div className='wrapper'>
                    Japanese Garden
                </div>
            </div>
            <TimeUntil />
        </div>
    );
};

export default Featured;