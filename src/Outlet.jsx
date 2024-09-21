import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import o1 from './assets/image/o1.webp'
function Outlet(){
    return(
        <>
        <Navbar />
            <div className="container" id="benefits">
                <h1 className="text-center m-5">TEALOGY FRANCHISE MODEL</h1>
            </div>

            <div className="container row" id="outlet">
                <div className="col-md-4">
                    <div className="card mb-4 shadow-md p-3">
                        <div>
                            <img src={o1} />
                        </div>
                        <div>
                            <h4 className="bg-dark">Tealogy Neo</h4>
                        </div>
                        <div className="mt-5 text-center">
                            <h3>1000+ SQFT.</h3>
                            <p className="mt-3 mb-4">Expanding our horizons to the premium tea frontier.</p>
                            <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-md p-3">
                        <div>
                            <img src={o1} />
                        </div>
                        <div>
                            <h4 className="bg-dark">Cafe Model</h4>
                        </div>
                        <div className="mt-5 text-center">
                            <h3>300+ SQFT.</h3>
                            <p>Affordable cafe franchise opportunity perfectly balanced in size, designed for your success.</p>
                            <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card mb-4 shadow-md p-3">
                        <div>
                            <img src={o1} />
                        </div>
                        <div>
                            <h4 className="bg-dark">Pocket Cafe Model</h4>
                        </div>
                        <div className="mt-5 text-center">
                            <h3>150+ SQFT.</h3>
                            <p className="mt-3 mb-4">Encouraging entrepreneurs to operate their own Tea-cafe.</p>
                            <button className="btn btn btn-primary btn-md-square me-4 d-none d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">APPLY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}
export default Outlet