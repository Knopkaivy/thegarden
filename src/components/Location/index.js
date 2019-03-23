import React from 'react';

const Location = () => {
    return (
        <div className='location_wrapper'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.2408744730499!2d-122.70974838700636!3d45.5192415589293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495098a15edc679%3A0x9e8cc03627015eed!2sPortland+Japanese+Garden!5e0!3m2!1sen!2sus!4v1552869175910" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen
                title='location'></iframe>
            <div className='location_tag'>
                <div>LOCATION</div>
            </div>
        </div>
    );
};

export default Location;