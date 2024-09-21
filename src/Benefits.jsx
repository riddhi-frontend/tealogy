import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import i1 from './assets/image/i1.webp'
import i2 from './assets/image/i2.webp'
import i3 from './assets/image/i3.webp'
import i4 from './assets/image/i4.webp'
import i5 from './assets/image/i5.webp'
import i6 from './assets/image/i6.webp'
import main from './assets/image/main.webp'
function Benefits(){
    return(
        <>
        <Navbar />
        <div className="container" id="benefits">
            <h1 className="text-center m-5">TEALOGY FRANCHISE BENEFITS</h1>
        </div>

        <div className="franchise row">
            <div className="col-md-4" style={{marginTop:"10%"}}>
                <div className="ftext d-flex">
                    <p className="text-end">Scrumptious Menu with Pocket-Friendly Pricing</p>
                    <img src={i1} className="subimage" />
                </div>

                <div className="ftext d-flex">
                    <p className="text-end">We offer Hygienic & Standard Tasty Food</p>
                    <img src={i2} className="subimage" />
                </div>

                <div className="ftext d-flex">
                    <p className="text-end">We provide Training to Staff members</p>
                    <img src={i3} className="subimage" />
                </div>
            </div>

                <div className="col-md-3 ms-5">
                    <img src={main} className="main" />
                </div>

                <div className="col-md-4" style={{marginTop:"10%"}}>
                <div className="ftext d-flex">
                    <img src={i4} className="subimage" />
                    <p className="text-end ps-3">Well- Known Brand</p>
                </div>

                <div className="ftext d-flex">
                    <img src={i5} className="subimage" />
                    <p className="text-end ps-3">Proven Business Model</p>
                </div>

                <div className="ftext d-flex">
                    <img src={i6} className="subimage" />
                    <p className="text-end ps-2">High ROI (Return on Investment)</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
export default Benefits