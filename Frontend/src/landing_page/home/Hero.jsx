import React from "react";
import homeHero from "../../assets/homeHero.png";
import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <div className="container my-5">
            <div className="row text-center">
                <img src={homeHero} className="mb-5"/>
                <h2 className="mb-3 fw-normal">Invest in everything</h2>
                <h4 className="mb-5 fw-normal text-muted">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h4>
                <Link className="btn btn-primary rounded-5 py-2" style={{width:"25%",margin:"0 auto"}} to="/signup">Sign up for Free</Link>
            </div>
        </div>
    );
}