import React from 'react';
import Marketingbanner from '../assets/images/marketingbanner.jpg'

const CampaginBanner = () => {
    return (
        <div className="row justify-content-center mb-5" style={{paddingTop:"150px"}}>
        <div className="col-11  justify-content-center">
            <img src={Marketingbanner} alt = "Marketing Banner" height="250px" width="100%"/>
        </div>
        </div>
    )
}

export default CampaginBanner;
