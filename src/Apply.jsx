import React from "react";
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import logo from'../src/assets/image/tealogylogo.webp'
import ApplyNow from "./Applynow.jsx";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function Apply(){
    return(
        <>
        <Navbar />
            <div className="row">
                <div className="container-fuild bg-dark mt-5">
                    <div className="row p-5 ms-5 text-white">
                        <div className="col-md-6">
                            <img src={logo} />
                            <p className="pt-2">Contact us today to learn more about franchise opportunities and start your journey towards a rewarding tea business!</p>
                            <div className="d-flex">
                                <PhoneIphoneIcon fontSize="large" className="mt-3 me-2"/>
                                <p className="pt-3 fs-5">+91 6269112500</p>
                            </div>
                            <div className="d-flex">
                                <LocationOnIcon fontSize="large" className="mt-3 me-2"/>
                                <p className="pt-2">Head Office - 503-A/B, 5th Floor Princess Business Sky Park Block no. 23,24 SCH No.54, PU-3 Commercial, Opp C21, AB Rd, Indore, Madhya Pradesh 452001</p>
                            </div>
                            <div className="d-flex">
                                <LocationOnIcon fontSize="large" className="mt-3 me-2"/>
                                <p className="pt-2">Company Outlet - UG - 7, PL-14, Airen Heights PU-3, Sch. No 54, Vijay Nagar, Indore</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <ApplyNow />
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}
export default Apply

