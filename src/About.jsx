import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Applynow from "./Applynow";
function About(){
    return(
        <>
        <Navbar />
            <div className="row mb-5 mt-3">
                <div className="pcontent col-md-6">
                    <h1>TEALOGY</h1>
                    <p>Tealogy is an Indian cafe chain that focuses on tea-based beverages. Tealogy was founded in 2018 in Indore, India. Now we have 320+ tea cafe outlets across India. We offer a variety of tea and beverages with some snacks as well. We provide the best taste of the kulhad tea & coffee at pocket prices. We always try to provide the best experience and complete satisfaction to our customers through our services with our variety of foods, beverages.</p>
                    <p>We provide the best place for sitting in our cafe where you can enjoy yourself with your family and friends and can make some unforgettable memories with them. At Tealogy, we are not only serving food and beverages. But we also try to make our customers happy by serving tastes that rejuvenate the mood.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="text-center">140+</h2>
                            <h4 className="text-center">Cities</h4>
                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center">320+</h2>
                            <h4 className="text-center">Outlets</h4>
                        </div>
                        <div className="col-md-4">
                            <h2 className="text-center">2B+</h2>
                            <h4 className="text-center">Kulhad Served</h4>
                        </div>
                    </div>

                    <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex mt-3" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
			</div>
                <div className="col-md-5 pt-2">
                    <Applynow />
                </div>
            </div>
        <Footer />
        </>
    )
}
export default About