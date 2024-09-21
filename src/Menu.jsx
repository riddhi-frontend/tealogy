import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SliderComponent from "./SliderComponent";
function Menu(){
    return(
        <>
        <Navbar/>
            <h1 className="text-center mt-5 mb-5" style={{color: "#2E3D4B"}}>TEALOGY MENU</h1>

            <div className="card slider">
                <SliderComponent/>
            </div>
        <Footer/>
        </>
    )
}
export default Menu