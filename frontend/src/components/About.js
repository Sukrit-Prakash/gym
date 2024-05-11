import React from 'react'
import aboutPic from '../assets/image/about.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function About() {
    return (
        <div id="section3" className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <img className="img-fluid mb-4 mb-lg-0" src={aboutPic} alt="Image" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-4 mb-4 text-sm-start text-center">10 Years Experience</h2>
                    <p className='text-sm-start text-center'>Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore dolore takima ipsum lorem rebum</p>
                    <div className="about row py-2 text-sm-start text-center">
                        <div className="col-sm-6">
                            <i className="flaticon-barbell display-2"></i>
                            <h4>Certified GYM Center</h4>
                            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="flaticon-medal display-2"></i>
                            <h4>Award Winning</h4>
                            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
                        </div>
                    </div>
                    <div className='text-sm-start text-center'>

                    <Link to="/" className="btn btn-lg px-4">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
