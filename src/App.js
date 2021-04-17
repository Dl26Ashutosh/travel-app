import React from 'react';
// Bootstrap css import
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';

// user list import

import Users from './components/UserList';

// lazy loading with site comoponents
import { Suspense } from 'react';
const Navbar = React.lazy(() => import('./components/navbar'));
const Banner = React.lazy(() => import('./components/banner'));
const FeaturedHomeSection = React.lazy(() => import('./components/featuredHomeSection'));
const CardSection =  React.lazy(()=>import('./components/cardSection'));
const CitiesSection =  React.lazy(()=>import('./components/citiesScroller'));
const Whychooseus =  React.lazy(()=>import('./components/whyChooseSection'));
const Marketingbanner =  React.lazy(()=>import('./components/CampaginBanner'));
const VillaSelection =  React.lazy(()=>import('./components/villaChoiceSection'));


  function  App(){
  return (
    <div className="App">
     <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading Navbar...</div>}>
            <Navbar/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading Banner...</div>}>
          <Banner/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading City...</div>}>
        <CitiesSection/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading...</div>}>
        <Marketingbanner/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading...</div>}>
         <Whychooseus/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28',fontWeight:"bold"}}>Loading Featured homes...</div>}>
            <FeaturedHomeSection/>
      </Suspense>
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading Villas...</div>}>
            <VillaSelection/>
      </Suspense> 
      <Suspense fallback={<div className="row justify-content-center" style={{fontSize:'28px',fontWeight:"bold"}}>Loading Card Section...</div>}>
            <CardSection/>
      </Suspense>
      <Users/>
    </div>
  )
}
export default App; 