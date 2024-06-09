import React from 'react'
// import aboutPic from '../assets/image/about.jpg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function About() {
    return (
        <div id="section3" className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <img  src="https://www.promptsreport.com/content/images/size/w2000/2024/01/DALL-E-2024-01-27-19.07.21---Create-a-realistic-image-depicting-a-modern-AI-gym.-The-image-should-feature-advanced-gym-equipment-with-integrated-AI-technology--such-as-smart-exerc-1.png" alt="" width="400" height="400" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-4 mb-4 text-sm-start text-center">AI INTEGRATED FEATURES</h2>
                    <p className='text-sm-start text-center'>REALTIME ANALYSIS USING COMPUTER VISUALIZATION AND MACHINE LEARNING ALGORIGHTMS</p>
                    <div className="about row py-2 text-sm-start text-center">
                        <div className="col-sm-6">
                            <i className="flaticon-barbell display-2"></i>
                            <h4>WORKOUT TRACKING</h4>
                            <p>users can track their daily,monthly fitness records</p>
                        </div>
                        <div className="col-sm-6">
                            <i className="flaticon-medal display-2"></i>
                            <h4>PERSONALISED</h4>
                            <p>gives user specific training and nutrition hacks</p>
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
