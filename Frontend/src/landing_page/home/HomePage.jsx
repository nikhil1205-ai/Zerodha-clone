import React from "react";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar"
import Footer from "../Footer";

export default function HomePage(){
    return (
     <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
     </>
    );
}