import React from "react";
import ecosystem from "../../assets/ecosystem.png"
import pressLogos from "../../assets/pressLogos.png"

export default function Awards(){
    return (
<div className="container my-5">
  <div className="row">
    
    {/* LEFT SECTION */}
    <div className="col-md-6  mt-5 me-">
      <div >
        <h2 className="mb-5 fw-normal">Trust with confidence</h2>

        {/* Section 1 */}
        <div className="mb-4">
          <h4 className="fw-normal">Customer-first always</h4>
          <p className="fs-6">
            That's why <span className="fw-normal text-primary">1.6+ crore</span> customers trust Zerodha with 
            <span className="fw-bold text-primary"> ~ ₹6 lakh crores</span> of equity investments, making us India's largest broker; 
            contributing to 15% of daily retail exchange volumes in India.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-4">
          <h4 className="fw-normal">No spam or gimmicks</h4>
          <p className="fs-6">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, 
            the way you like. <a href="" style={{textDecoration:"none"}}>Our philosophies.</a>
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-4">
          <h4 className="fw-normal">The Zerodha universe</h4>
          <p className="fs-6">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services 
            specific to your needs.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-4">
          <h4 className="fw-normal">Do better with money</h4>
          <p className="fs-6">
            With initiatives like behavioural finance and long-term investing tools, we don't just facilitate transactions,
            but actively help you do better with your money. Learn more about 
            <a href=""  style={{textDecoration:"none"}}> Kill Switch</a>.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="col-md-6 ">
      <img 
        className="img-fluid mt-5 mb-1 rounded shadow"
        src={ecosystem} 
        alt="ecosystem" 
      />
      <br/><br/>
      {/* <div className="">
        <a href=" " className="mx-5">Explore our products <i class="fa-solid fa-arrow-right"></i> </a>
        <a href="" className="mx-5">Try Kite demo <i class="fa-solid fa-arrow-right"></i> </a>
      </div> */}
    </div>

  </div>
<div className="row my-5 p-5 text-center">
  <div className="col-12 d-flex justify-content-center">
    <img 
      src={pressLogos} 
      alt="Press Logos" 
      className="img-fluid" 
      style={{ width: "80%", maxWidth: "900px" }} 
    />
  </div>
</div>

</div>

    );
}

