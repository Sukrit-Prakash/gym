import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import carousel1 from '../assets/image/carousel-1.jpg';
import carousel2 from '../assets/image/carousel-2.jpg';
import React from 'react';

export default function Banner() {
    return (

        <div id="slider">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4>Gym & Fitness Center</h4>
                            <h1 className='display-1'>Shape Your Body</h1>
                            <Link to="/" className="btn mt-3 mt-md-5 py-md-3 px-md-4 px-lg-5 rounded-0 border-2 text-white text-uppercase">Join Us Now</Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <h4>Gym & Fitness Center</h4>
                            <h1 className='display-1'>Shape Your Body</h1>
                            <Link to="/" className="btn mt-3 mt-md-5 py-md-3 px-md-4 px-lg-5 rounded-0 border-2 text-white text-uppercase">Join Us Now</Link>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
