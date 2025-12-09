import React from "react";
import education from "../../assets/education.svg";

export default function Education(){
     return (
    <div className="container my-5">
      <div className="row">

        <div className="col-md-6 ">
          <img 
            className="img-fluid mt-5 mb-1 rounded shadow"
            src={education} 
            alt="ecosystem" 
          />
        </div>

        <div className="col-md-6  my-5">
          <div>
            <h2 className="mb-5 fw-normal">Free and open market education</h2>
    
            {/* Section 1 */}
            <div className="mb-4">
              <p className="fs-6">
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
              </p>
               <a href=" " style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
    
            {/* Section 2 */}
            <div className="mb-4">
              <p className="fs-6">
                  TradingQ&A, the most active trading and investment community in India for all your market related queries.
              </p>
              <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i> </a>
            </div>
    
          </div>
        </div>
    
      </div>
    </div>
    
    );
}