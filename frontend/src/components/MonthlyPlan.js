import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function MonthlyPlan() {
    return (
        <section id="section7" className="mb-4 pt-3" >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h6 className='my-3 fw-bold'>OUR PLAN</h6>
                        <h2 className='display-6'>CHOSE YOUR PRICING PLAN</h2>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-8">

                        <div className="ps-item text-center mb-4">
                            <h3 className='mb-4'>Class drop-in</h3>
                            <div className="pi-price mb-4">
                                <h2>$ 39.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul className="list-group mb-4">
                                <li>Free Riding</li>
                                <li>Unlimited equipments</li>
                                <li>Persoanl Trainer</li>
                                <li>Weight losing classes</li>
                                <li>No time restriction</li>
                                <li>Monthly Something</li>
                            </ul>
                            <Link to="/" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="ps-item text-center mb-4">
                            <h3 className='mb-4'>12 Month unlimited</h3>
                            <div className="pi-price mb-4">
                                <h2>$ 99.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul className="list-group mb-4">
                                <li>Free Riding</li>
                                <li>Unlimited equipments</li>
                                <li>Persoanl Trainer</li>
                                <li>Weight losing classes</li>
                                <li>No time restriction</li>
                                <li>Monthly Something</li>
                            </ul>
                            <Link to="/" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8">
                        <div className="ps-item text-center mb-4">
                            <h3 className='mb-4'>6 Month unlimited</h3>
                            <div className="pi-price mb-4">
                                <h2>$ 59.0</h2>
                                <span>SINGLE CLASS</span>
                            </div>
                            <ul className="list-group mb-4">
                                <li>Free Riding</li>
                                <li>Unlimited equipments</li>
                                <li>Persoanl Trainer</li>
                                <li>Weight losing classes</li>
                                <li>No time restriction</li>
                                <li>Monthly Something</li>
                            </ul>
                            <Link to="/" className="btn text-white rounded-0 d-block text-decoration-none">Enroll now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
