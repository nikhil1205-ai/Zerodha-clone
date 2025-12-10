import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( <>
             <div className="container py-5">
                 <div className="row text-center">
                     <h2 className="mb-3 fw-normal">Open a Zerodha account</h2>
                     <h4 className="mb-5 fw-normal text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h4>
                     <Link className="btn btn-primary rounded-5 py-2" style={{width:"25%",margin:"0 auto"}} to="/signup">Sign up for Free</Link>
                 </div>
             </div>    
    </> );
}

export default OpenAccount;