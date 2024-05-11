import React from 'react'
import PageHeader from "../components/PageHeader";
import About from '../components/About';
import Features from "../components/Features";
import Team from '../components/Team';

export default function AboutNav() {
    return (
        <>
            <PageHeader title="About Us" readOnly />
            <About />
            <Features />
            <Team />

        </>
    )
}
