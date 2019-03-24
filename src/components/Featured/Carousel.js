import React from 'react';
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: '5s'
    }

    return (
        <div 
            className='carrousel_wrapper'
            style={{
                backgroundColor: 'red',
                overflow: 'hidden' 
            }}    
        >
        <Slider {...settings}>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background:`url(${slide_one})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw'
                    }}
                ></div>
            </div>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background:`url(${slide_two})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw'
                    }}
                ></div>
            </div>
            <div>
                <div
                    className='carrousel_image'
                    style={{
                        background:`url(${slide_three})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw'
                    }}
                ></div>
            </div>
        </Slider>
            
        </div>
    );
};

export default Carousel;