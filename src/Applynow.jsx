import React from "react";
function ApplyNow(){
    return(
        <>
        <div className="apply-now container">
            <h1>READY TO BREW UP<br/> SUCCESS WITH TEALOGY?</h1>

            <form style={{padding:"15px 15px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="Name*" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" placeholder="Email Adress*" />
                    </div>
                </div>

                <div>
                    <input type="tel" placeholder="Contact Number*" className="w-75"/>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input type="text" placeholder="City*" />
                    </div>
                    <div className="col-md-6">
                        <input type="email" placeholder="Zip/Postal Code*" />
                    </div>
                </div>

                <div>
                    <input type="text" placeholder="Your Message" />
                </div>

                <button id="applynowbtn"  className="btn btn-lg-square me-4 d-lg-inline-flex" data-bs-toggle="modal" data-bs-target="#applynow">Request a Call Back!</button>
            </form>
        </div>
        </>
    )
}
export default ApplyNow

