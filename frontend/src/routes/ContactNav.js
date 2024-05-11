import React from 'react'
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";

export default function ContactNav() {
    return (
        <>
            <PageHeader title="Contact Us" readOnly />
            <Contact />
        </>
    )
}
