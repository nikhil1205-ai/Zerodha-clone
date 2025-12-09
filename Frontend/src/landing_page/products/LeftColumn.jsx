import React from "react";
import appstoreBadge from "../../assets/appstoreBadge.svg"
import googlePlayBadge from "../../assets/googlePlayBadge.svg"


function LeftColumn({
  imageURL,
  productName,
  productDesription,
  tryDemo="",
  learnMore="",
  googlePlay="",
  appStore="",
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <img style={{width:"75%"}} src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 className='fs-3  fw-normal'>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{textDecoration:"none"}} className="mt-3">Try Demo</a>
            <a href={learnMore}  style={{ marginLeft: "50px",textDecoration:"none" }}>
              Learn More
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src={googlePlayBadge} />
            </a>
            <a href={appStore}>
              <img
                src={appstoreBadge}
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftColumn;