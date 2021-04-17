import React from 'react';
import Cities from './newCities';
const citiesScroller = () => {
    return (
        <div className="container cities-section">
                <div className="row justify-content-center"><h3 className="text-center">Explore `Incredible India`, Your Way</h3></div>
                <div className="row justify-content-center text-center pt-3 mb-5" style={{fontWeight:'500'}}>Skip the cookie cutter hotel for the charm  and warmth of our luxary holidays homes and  personalised experience. With over 500+ homes in 50+ destinations ,invites you to experience the authenticity of India without compromsing on hospitally.</div>
                <Cities/>        
        </div>
    )
}

export default citiesScroller;
