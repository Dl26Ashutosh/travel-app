import React,{Suspense}  from 'react';
import TempImg from '../assets/images/whychoosetemp.png';

const whyChooseSection = () => {
    return (
        <div className="why-choose-section pt-4 mt-5 pb-4 " style={{backgroundColor:'#dee2e6'}}>
            <div className="row justify-content-center  text-center">
                <div className="why-choose-secyion-title" style={{fontSize:'28px',fontWeight:'bold'}}>Why Choose Vista For Your Ideal Getaway</div>\
            </div>
            <div className="row justify-content-center pt-5">
              <div className="col-12 col-lg-2 col-md-4 text-center">
                  <img src={TempImg} alt="Temp-img" height="180px" width="100%"/>
                  <div style={{fontSize:'15px',fontWeight:'500'}}>Only ! in %0 homes are accepted.</div>
                </div>
              <div className="col-12 col-lg-2  text-center">
                <img src={TempImg} alt="Temp-img" height="180px" width="100%"/>
                <div style={{fontSize:'15px',fontWeight:'500'}}>500+ Handpicked homes across India</div>
              </div>
              <div className="col-12 col-lg-2 text-center">
              <img src={TempImg} alt="Temp-img" height="180px" width="100%"/>
                <div style={{fontSize:'15px',fontWeight:'500'}}>Hosted over 250000+ happy guest</div>
              </div>
              <div className="col-12 col-lg-2 text-center">
              <img src={TempImg} alt="Temp-img" height="180px" width="100%"/>
                    <div style={{fontSize:'15px',fontWeight:'500'}}> Homes are regularly audited for 200+ factors </div>
                </div>
              <div className="col-12 col-lg-2 text-center">
              <img src={TempImg} alt="Temp-img" height="180px" width="100%"/>
                <div style={{fontSize:'15px',fontWeight:'500'}}> We empower the local community</div>
              </div>
          </div> 
        </div>
    )
}

export default whyChooseSection;
