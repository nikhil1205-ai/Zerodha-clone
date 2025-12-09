import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( <>
             <div className="container py-5">
                 <div className="row text-center">
                     <h2 className="mb-3">404 Page is not Found</h2>
                     <h4 className="mb-5 fw-normal text-muted">Route is give in Navbar go in..... </h4>
                     <Link className="btn btn-primary rounded-5 py-2" style={{width:"25%",margin:"0 auto"}} to="/">Go Home</Link>
                 </div>
             </div>    
    </> );
}

export default NotFound;