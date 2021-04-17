import React from 'react';
import '../css/choices.css';

const villaChoiceSection = () => {
    return (
        <div className="choice-section mt-5 pt-4">
            <div className="row justify-content-center "  style={{fontSize:'28px',fontWeight:'bold'}}>We'll Spoil You For Choice</div>
            <div className="row justify-content-center mt-3 "  style={{fontSize:"13px",fontWeight:"bold"}}><div className="col-lg-8 text-center" >Whether you're looking for spacious villa for a big group celebration, a romantic gatway for a couple or a peaceful place to sneak away from the hustle-bustle of city life, We have got something for everyone.</div> </div>
            <div className="row justify-content-center mt-5">
            <div className="col-lg-2">
            <button type="button" className="btn btn-light" style={{height:'70px',fontSize:'15px',fontWeight:"bold",border:'1px solid grey',width:'100%'}}>Luxury Villas</button>
            </div>
            <div className="col-lg-2">
            <button type="button" className="btn btn-light" style={{height:'70px',fontSize:'15px',fontWeight:"bold",border:'1px solid grey',width:'100%'}}>Villas Near Mumbai</button>
            </div>
            <div className="col-lg-2">
            <button type="button" className="btn btn-light" style={{height:'70px',fontSize:'15px',fontWeight:"bold",border:'1px solid grey',width:'100%'}}>Villas Near Delhi</button>
            </div>
            <div className="col-lg-2">
            <button type="button" className="btn btn-light" style={{height:'70px',fontSize:'15px',fontWeight:"bold",border:'1px solid grey',width:'100%'}}>Villas Near Bangalore</button>
            </div>

            </div>
        </div>
    )
}

export default villaChoiceSection;
