import React from "react";

function RightColumn({ imageURL, productName, productDesription="", learnMore="" }) {
  return (
    <div className="container mt-5">
      <div className="row mb-1">
        <div className="col-6 p-5 mt-5">
          <h1 className="fs-3  fw-normal">{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightColumn;