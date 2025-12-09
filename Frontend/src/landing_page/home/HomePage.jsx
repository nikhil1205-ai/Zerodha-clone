import React from "react";
import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";

export default function HomePage(){
    return (
     <>
        <Hero/>
        <Awards/>
        <Pricing/>
        <Education/>
        <OpenAccount/>

     </>
    );
}