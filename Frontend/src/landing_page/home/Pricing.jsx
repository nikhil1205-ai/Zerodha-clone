import React from "react";
import pricing0 from "../../assets/pricing0.svg"
import intradayTrades from "../../assets/intradayTrades.svg"

export default function Pricing(){
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-4 mt-5">
                   <h3 className="fw-normal mb-4">Unbeatable pricing</h3>
                   <h4 className="text-muted fs-6 mb-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</h4>
                   <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="d-flex gap-1 align-items-center">
                        <img src={pricing0} alt="" style={{ width: "175px" }} />
                        <img src={pricing0} alt="" style={{ width: "175px" }} />
                        <img src={intradayTrades} alt="" style={{ width: "175px" }} />
                    </div>
                     <div className="d-flex gap-3 align-items-center">
                        <p className="fs-6 me-3">Free account opening</p>
                        <p className="fs-6 me-3">Free equity delivery and direct mutual funds</p>
                        <p className="fs-6 me-3"> Intraday and F&O</p>
                     </div>
                </div>

            </div>
        </div>
    );
}