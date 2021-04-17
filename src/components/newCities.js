import React from 'react';
import img5 from '../assets/images/5.jpg';
import img4 from '../assets/images/4.jpg';
import img3 from '../assets/images/3.jpg';




const newCities = () => {
    return (
        <div className="container">
{/* <!-- Carousel wrapper --> */}
<div
  id="carouselBasicExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  {/* <!-- Indicators --> */}
  <div class="carousel-indicators mt-5" style={{top:"150px"}}>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
      style={{backgroundColor:'maroon',height:"15px",width:"15px"}} className="rounded-circle active"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
      style={{backgroundColor:'maroon',height:"15px",width:"15px"}} className="rounded-circle"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
      style={{backgroundColor:'maroon',height:"15px",width:"15px"}} className="rounded-circle"
    ></button>
  </div>

  {/* <!-- Inner --> */}
  <div class="carousel-inner">
    {/* <!-- Single item --> */}
    <div class="carousel-item active">
    <div className="row justify-content-center">
        <div className="col-2 text-center">
            <img className="d-block rounded-circle w-100 " src={img5} alt="img1" />
                <h4>Mumbai</h4>
        </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle w-100" src={img5} alt="img2" />
            <h4>Goa</h4>
        </div>
        <div className="col-2 text-center">
                <img className="d-block rounded-circle w-100" src={img5} alt="img3" />
                <h4>Delhi</h4>
         </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle w-100" src={img5} alt="img4" />
           <h4>Bangalore</h4>
        </div>
        <div className="col-2 text-center">
              <img className="d-block rounded-circle w-100" src={img5} alt="img5" />
             <h4>Udaipur</h4>
        </div>
    </div>   
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
    <div className="row justify-content-center">
        <div className="col-2 text-center">
            <img className="d-block rounded-circle h-100 w-100 " src={img4} alt="img1" />
                <h4>Mumbai</h4>
        </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle h-100 w-100" src={img4} alt="img2" />
            <h4>Goa</h4>
        </div>
        <div className="col-2 text-center">
                <img className="d-block rounded-circle h-100 w-100" src={img4} alt="img3" />
                <h4>Delhi</h4>
         </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle h-100 w-100" src={img4} alt="img4" />
           <h4>Bangalore</h4>
        </div>
        <div className="col-2 text-center">
              <img className="d-block rounded-circle h-100 w-100" src={img4} alt="img5" />
             <h4>Udaipur</h4>
        </div>
    </div>  
    </div>

    {/* <!-- Single item --> */}
    <div class="carousel-item">
    <div className="row justify-content-center">
        <div className="col-2 text-center">
            <img className="d-block rounded-circle w-100 " src={img3} alt="img1" />
                <h4>Mumbai</h4>
        </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle  w-100" src={img3} alt="img2" />
            <h4>Goa</h4>
        </div>
        <div className="col-2 text-center">
                <img className="d-block rounded-circle w-100" src={img3} alt="img3" />
                <h4>Delhi</h4>
         </div>
        <div className="col-2 text-center">
            <img className="d-block rounded-circle w-100" src={img3} alt="img4" />
           <h4>Bangalore</h4>
        </div>
        <div className="col-2 text-center">
              <img className="d-block rounded-circle w-100" src={img3} alt="img5" />
             <h4>Udaipur</h4>
        </div>
    </div>  
    </div>
  </div>
  {/* <!-- Inner --> */}

  {/* <!-- Controls --> */}
  <button
    class="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* <!-- Carousel wrapper --> */}
        </div>
    )
}

export default newCities
