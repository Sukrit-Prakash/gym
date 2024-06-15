import React from 'react'
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import ChoseUs from '../components/ChoseUs';
// import Testimonial from '../components/Testimonial';
import Calorieform from '../components/calorieform';
export default function FeaturesNav() {
    return (
        <>
            <PageHeader title="Features" readOnly />
            <Services />
            {/* <ChoseUs /> */}
            <Calorieform/>
            {/* <Testimonial /> */}
        </>
    )
}
