import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import map from './assets/image/map.jpeg'
function Presence(){
    return(
        <>
        <Navbar />
        <div className="row mb-5 mt-5">
            <div className="pcontent col-md-6">
                <h1>OUR PRESENCE</h1>
                <p>We have 320+ outlets all over India and more than 15+ outlets only at Indore. We offer franchise opportunities all over India. If you are passionate about business or want to be an entrepreneur! fill the below mention franchise details form and complete the first step towards your dream business. This is not only the café franchise but also a platform to connect passionate Entrepreneurs like you.</p>
                <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
            </div>
            <div className="pmap col-md-5 pt-2">
                <img src={map} />
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Presence