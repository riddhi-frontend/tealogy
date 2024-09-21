import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s1 from './assets/image/s1.webp'
import s2 from './assets/image/s2.webp'
import s3 from './assets/image/s3.webp'
import s4 from './assets/image/s4.webp'
import s5 from './assets/image/s5.webp'
import s6 from './assets/image/s6.webp'
import s7 from './assets/image/s7.webp'
import s8 from './assets/image/s8.webp'
import s9 from './assets/image/s9.webp'
import s10 from './assets/image/s10.webp'
import s11 from './assets/image/s11.webp'
import s12 from './assets/image/s12.webp'

const SliderComponent = () => {
    const settings = {
        dots: true, // show dots for navigation
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="d-flex">
                    <img src={s1} alt="" />
                    <img src={s2} alt="" />
                </div>
                <div className="d-flex">
                    <img src={s3} alt="" />
                    <img src={s4} alt="" />
                </div>
                <div className="d-flex">
                    <img src={s5} alt="" />
                    <img src={s6} alt="" />
                </div>
                <div className="d-flex">
                    <img src={s7} alt="" />
                    <img src={s8} alt="" />
                </div>
                <div className="d-flex">
                    <img src={s9} alt="" />
                    <img src={s10} alt="" />
                </div>
                <div className="d-flex">
                    <img src={s11} alt="" />
                    <img src={s12} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;