import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className='bck_red'>
            <Fade delay={500}>
                <div className='font_righteous footer_logo_venue'>The Garden</div>
                <div className='footer_copyright'>
                    Photos by David Wirzba, Todd Trapani, Slava Keyzman on Unsplash.
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;