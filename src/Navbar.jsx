import React from "react";
import logo from'../src/assets/image/tealogylogo.webp'
function Navbar(){
    return(
        <>
        <div className="container nav-bar bg-dark p-3">
            <nav className="navbar navbar-expand-lg">
                <div>
                    <a href="/" className="navbar-brand ps-4"><img src={logo} /></a>
                </div>

                <div className="navbar-nav mx-5">
                    <li><a href="/" className="nav-item nav-link active text-white">Home</a></li>
                    <li><a href="About-us" className="nav-item nav-link active text-white">About us</a></li>
                    <li><a href="our-presence" className="nav-item nav-link active text-white">Our Presence</a></li>
                    <li><a href="menu" className="nav-item nav-link active text-white">Our Menu</a></li>
                    <li><a href="benefits" className="nav-item nav-link active text-white">Benefits</a></li>
                    <li><a href="outlets" className="nav-item nav-link active text-white">Outlets</a></li>
                    <li><a href="apply-now" className="nav-item nav-link active text-white">Apply Now</a></li>
                </div>

                <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
            </nav>
        </div>
        </>
    )
}
export default Navbar