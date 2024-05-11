import React from 'react'

export default function Services() {
    return (
        <div id="services" className='container pb-4'>
            <div className="row align-items-center">
                <div className="col-md-6 mb-md-0 mb-4">
                    <div className="d-flex align-items-center justify-content-center about-video set-bg">
                        <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup">
                            <i className="fa fa-caret-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-md-6 text-sm-start text-center">
                    <h4>SERVICES</h4>
                    <h2 className='text-uppercase mb-4'>what we have done</h2>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                    <div className='about-bar'>
                        <div className='body-building mb-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Body building</p>
                                <p>80%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>

                        <div className='training mb-4'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Training</p>
                                <p>85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>

                        <div className='fitness'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p>Fitness</p>
                                <p>75%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
