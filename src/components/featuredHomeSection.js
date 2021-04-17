import React from 'react';
import Featured1 from '../assets/images/featured1.jpg';
import temp1 from '../assets/images/4.jpg';

import  temp2 from '../assets/images/5.jpg';

const featuredHomeSection = () => {
    return (
        <div className="feature-home">
            <div className="row justify-content-center mt-5" style={{fontSize:"28px",fontWeight:"bold"}}>Our Featured Holiday Homes</div>
            <div className="row justify-content-center pt-3 "  style={{fontSize:'15px',fontWeight:'500'}}>We carrefully handpicked and manage all our homes, to ensure you have a hassle-free,pleasant stay.</div>
            <div className="row justify-content-center mt-3">


                {/* 1st half Grid */}
                <div className="col-lg-4 col-md-6 col-8 pt-4">
                        <div className="row">
                        <img  src={Featured1}  width="100%" alt="temp-img" className="pl-0 pr-0"/>
                        <div className="col-lg-6"><div style={{fontSize:"13px",fontWeight:"bold"}}>Amara Villa</div><div style={{fontSize:"13px",fontWeight:"bold",color:"gray"}}> ALibuag,Maharashtra</div></div>
                        <div className="col-lg-6 text-right"><div style={{fontSize:"13px",fontWeight:"bold",color:"gray"}}>Per Night</div><div style={{fontSize:"12px",fontWeight:"bold"}}> ₹ 67,000</div></div>
                    </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-lg-6 text-left pl-0"><img src={temp1}  alt="temp1" width="100%"/></div>
                    <div className="col-lg-6 text-right pr-0"><img src={temp1}  alt="temp2" width="100%"/></div>
                </div>


                <div className="row mt-4">
                        <img  src={Featured1}  width="100%" alt="temp-img" className="pl-0 pr-0"/>
                        <div className="col-lg-6"><div style={{fontSize:"13px",fontWeight:"bold"}}>The Rain </div><div style={{fontSize:"13px",fontWeight:"bold",color:"gray"}}> Allepey,Kerala</div></div>
                        <div className="col-lg-6 text-right"><div style={{fontSize:"13px",fontWeight:"bold",color:"gray"}}>Per Night</div><div style={{fontSize:"12px",fontWeight:"bold"}}> ₹ 39,000</div></div>
                    </div>
                </div>
            {/* @nd Half Grid */}
                <div className="col-lg-4 col-md-6 col-8">
                            <div className="row justify-content-center mt-4">
                                <div className="col-lg-6 text-left "><img src={temp1}  alt="temp1" height="190px" width="100%"/></div>
                                <div className="col-lg-6 text-right "><img src={temp1}  alt="temp2" height="190px" width="100%"/></div>
                            </div>

                             <div className="col-lg-12 col-md-6 col-8 pt-4 pl-0 pr-0">
                               
                                <img  src={Featured1}  width="100%" height="175px" alt="temp-img"/>
                              
                            </div>

                            <div className="row justify-content-center mt-4">
                                <div className="col-lg-6 text-left "><img src={temp1}  alt="temp1" height="190px" width="100%"/></div>
                                <div className="col-lg-6 text-right "><img src={temp1}  alt="temp2" height="190px" width="100%"/></div>
                            </div>


                </div>


            </div>
        </div>
    )
}

export default featuredHomeSection;
