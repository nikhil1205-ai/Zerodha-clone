import React, { PureComponent } from 'react';
import streakLogo from "../../assets/streakLogo.png"
import smallcaseLogo from "../../assets/smallcaseLogo.png"
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png"
import { Link } from 'react-router-dom';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className='mt-5 fs-3  fw-normal'>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={streakLogo} style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={zerodhaFundhouse} style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={zerodhaFundhouse} style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={streakLogo} style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo} style={{width:"50%"}} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }} to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;