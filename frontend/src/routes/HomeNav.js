import React from 'react'
import Banner from '../components/Banner';
// import GymClass from '../components/GymClass';
import About from '../components/About';
import ChoseUs from '../components/ChoseUs';
// import Team from '../components/Team';
import Subscribe from '../components/Subscribe';
import MonthlyPlan from '../components/MonthlyPlan';
import BMI from '../components/BMI';
import Testimonial from '../components/Testimonial';


export default function HomeNav() {
    return (
        <>
            <Banner />
            {/* <GymClass /> */}
            <About />
            <ChoseUs />
            {/* <Team /> */}
            <Subscribe />
            <MonthlyPlan />
            <BMI />
            <Testimonial />
        </>
    )
}
