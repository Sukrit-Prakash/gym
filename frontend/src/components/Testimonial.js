import React from 'react'
import testimonial1 from '../assets/image/testimonial-1.jpg'
import testimonial2 from '../assets/image/testimonial-2.jpg'
import testimonial3 from '../assets/image/testimonial-3.jpg'

export default function Testimonial() {

    const myStyle = {

        minHeight: '450px'

    };

    return (
        <div id="testimonial" className="container-fluid-lg position-relative my-5">
            <div className="container-lg">
                <div className="row px-lg-3 align-items-center">
                    <div className="col-md-6 bg-secondary">
                        <div className="d-flex align-items-center px-3" style={myStyle}>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial1} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">Profession</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                            Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial2} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">Profession</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                            Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="d-flex align-items-center mb-4 text-white">
                                            <img className="rounded-circle bg-dark p-2 img-fluid" src={testimonial3} alt="Image" />
                                            <div className="ps-4">
                                                <h4>Client Name</h4>
                                                <p className="m-0">Profession</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-text position-relative border bg-dark text-white mb-5 p-4">
                                            Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-md-3 d-none d-md-block">
                            <h4>Testimonial</h4>
                            <h4 className="display-xl-4 display-5 mb-4 text-white">What Our Clients Say?</h4>
                            <p className="m-0 text-white">Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita clita rebum kasd magna erat diam</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
