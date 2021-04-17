import React from 'react';
import Bgimage from '../assets/images/banner.jpg';
import '../css/banner.css';

const banner = () => {
    return (
      <>
        <div className="banner-section">
          <div className="row">
            <div className="container col-7 col-lg-4 main-banner-text">
                  <div className="row banner-text-1">Working round-the-clock to keep you & your family safe on your next stay!</div>
                  <div  className="row banner-text-2">Our ground team along with industry experts are implementing all WHO safety guidelines to make sure you 100% protect.</div>
                  <div className="row banner-text-3"><a href="">Learn more</a></div>
            </div>
            <div className="col-12 col-lg-6">
                  <img src={Bgimage} alt="banner-img" height="500px" width="100%"/>
            </div>
          </div>
        </div>
        <div className="container input-field pt-2 pb-2">
                <div className="row  ">
                    <div className="col-lg-4 col-12">
                      <div className="row text-left pl-2" style={{fontWeight:'500'}}>Location</div>
                      <div className="row text-left pl-2 pt-2"><input type="text" placeholder="Where Are Youn Treveling To/From?" style={{width:'320px'}}/></div>
                    </div>
                      <div className="col-lg-4 col-12 ">
                        <div className="row text-left pl-2" style={{fontWeight:'500'}}>Date</div>
                        <div className="row text-left pl-2 pt-2"><input type="text" placeholder="Check-in/Check-out"  style={{width:'320px'}}/></div>
                      </div>
                      <div className="col-lg-2 col-12 ">
                        <div className="row text-left pl-2 mob-len" style={{fontWeight:'500'}}>Guest</div>
                        <div className="row text-left pl-2 pt-2"><input type="text" placeholder="1 Guest" style={{width:'140px'}}/></div>
                      </div>
                      <div className="col-12 col-lg-2 text-sm-left tex-center mt-3 pt-2">
                    <button  className="btn btn-search ">SEARCH</button>
                </div>
                  </div>
          </div>
                
        </>
    )
}

export default banner;
