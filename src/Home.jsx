import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import { Row } from "react-bootstrap";

function Home() {
    return (
        <>
            <Navbar />
            <div className="home container my-5">
                <Row>
                <div className="image-container col-md-4">
                    <img src="https://tealogy.in/storage/cms-pages/main/home-about-21052412505146.png" alt="Sandwiches" />
                </div>
                <div className="content-container col-md-8">
                    <h2>Best Tea Franchise</h2>
                    <h1>A Cup Full of Happiness for Your Soul Cup Tea!</h1>
                    <p>We are an Indian café chain that welcomes you with our exceptional kulhad chai experience. Spreading our tealogy effects from our establishment in 2018 and are continuously breaking the barriers of boundaries across the globe, curating the aromatic essence of our special kulhad chai.</p>
                    <button>Read More</button>
                    <div className="stats">
                        <div>
                            <h3>140+</h3>
                            <p>Cities</p>
                        </div>
                        <div>
                            <h3>320+</h3>
                            <p>Outlets</p>
                        </div>
                        <div>
                            <h3>10+</h3>
                            <p>States</p>
                        </div>
                        <div>
                            <h3>200M+</h3>
                            <p>Kulhad Served</p>
                        </div>
                    </div>
                </div>
            </Row>
            </div>
            <Footer />
        </>
    );
}

export default Home;
