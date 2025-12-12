import React from "react";
import { Link } from "react-router-dom";

// NOTE: For Font Awesome icons to work, add this in your public/index.html <head> or install the package:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />

const currency = (n) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(n);
}

const StatRow = ({ label, value, colored }) => (
  <div className="d-flex justify-content-between align-items-center py-2 border-bottom">
    <div className="text-muted small">{label}</div>
    <div className={`fw-bold ${colored ? 'text-success' : ''}`}>{value}</div>
  </div>
)

const Funds = () => {
  // example data (replace with props or real data)
  const data = {
    availableMargin: 4043.10,
    usedMargin: 3757.30,
    availableCash: 4043.10,
    openingBalance1: 4043.10,
    openingBalance2: 3736.40,
    payin: 4064.00,
    span: 0.00,
    deliveryMargin: 0.00,
    exposure: 0.00,
    optionsPremium: 0.00,
    collateralLiquid: 0.00,
    collateralEquity: 0.00,
  }

  return (
    <div className="d-flex justify-content-center py-2">
      {/* central wrapper with fixed max width so content doesn't stretch */}
      <div className="w-100" style={{ maxWidth: 980 }}>

        {/* Reduced spacing for heading */}
        <h1 className="fs-5 fw-normal text-center mb-2">Zerodha Funds</h1>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center gap-3">
            <img src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="wallet" className="rounded-circle" style={{width:48, height:48, objectFit:'cover'}}/>
            <div>
              <h5 className="mb-0">Funds</h5>
              <small className="text-muted">Instant, zero-cost fund transfers with UPI</small>
            </div>
          </div>

          <div className="btn-group">
            <Link to="#" className="btn btn-outline-success d-flex align-items-center">
              <i className="fa-solid fa-plus me-2" /> Add funds
            </Link>
            <Link to="#" className="btn btn-outline-primary d-flex align-items-center">
              <i className="fa-solid fa-arrow-up-right-from-square me-2" /> Withdraw
            </Link>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-lg-7">
            <div className="card shadow-sm">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">Equity</h6>
                  <div className="small text-muted">Updated just now</div>
                </div>

                <div className="bg-light rounded-3 p-3 mb-2">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <small className="text-muted">Available margin</small>
                      <div className="h5 mb-0 text-success">{currency(data.availableMargin)}</div>
                    </div>
                    <div className="text-end">
                      <small className="text-muted d-block">Used margin</small>
                      <div className="h6 mb-0">{currency(data.usedMargin)}</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="text-muted">Available cash</small>
                      <div className="fw-bold">{currency(data.availableCash)}</div>
                    </div>

                    <div className="text-end">
                      <button className="btn btn-sm btn-outline-secondary me-2">
                        <i className="fa-regular fa-file-lines me-1"/> Statement
                      </button>
                      <button className="btn btn-sm btn-outline-secondary">
                        <i className="fa-solid fa-arrows-rotate me-1"/> Refresh
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row gx-3">
                  <div className="col-md-6">
                    <div className="card border-0 h-100">
                      <div className="card-body p-2">
                        <h6 className="small text-muted">Balance snapshot</h6>
                        <StatRow label="Opening Balance" value={currency(data.openingBalance1)} />
                        <StatRow label="Opening Balance" value={currency(data.openingBalance2)} />
                        <StatRow label="Payin" value={currency(data.payin)} colored />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card border-0 h-100">
                      <div className="card-body p-2">
                        <h6 className="small text-muted">Margins & Exposure</h6>
                        <StatRow label="SPAN" value={currency(data.span)} />
                        <StatRow label="Delivery margin" value={currency(data.deliveryMargin)} />
                        <StatRow label="Exposure" value={currency(data.exposure)} />
                        <StatRow label="Options premium" value={currency(data.optionsPremium)} />
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-2">
                    <div className="card border-0">
                      <div className="card-body p-2">
                        <h6 className="small text-muted mb-2">Collateral</h6>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="p-2 rounded-3 bg-white shadow-sm text-center">
                              <div className="small text-muted">Liquid funds</div>
                              <div className="fw-bold">{currency(data.collateralLiquid)}</div>
                            </div>
                          </div>
                          <div className="col-md-4 mt-2 mt-md-0">
                            <div className="p-2 rounded-3 bg-white shadow-sm text-center">
                              <div className="small text-muted">Equity</div>
                              <div className="fw-bold">{currency(data.collateralEquity)}</div>
                            </div>
                          </div>
                          <div className="col-md-4 mt-2 mt-md-0">
                            <div className="p-2 rounded-3 bg-white shadow-sm text-center">
                              <div className="small text-muted">Total Collateral</div>
                              <div className="fw-bold">{currency(data.collateralLiquid + data.collateralEquity)}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-between p-3">
                <div>
                  <h6 className="mb-2">Commodity</h6>
                  <p className="text-muted mb-2">You don't have a commodity account</p>
                  <Link to="#" className="btn btn-primary mb-3 d-inline-flex align-items-center">
                    <i className="fa-solid fa-folder-plus me-2"/> Open Account
                  </Link>

                  <hr />

                  <h6 className="mb-2">Quick actions</h6>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-outline-success btn-sm d-flex align-items-center">
                      <i className="fa-solid fa-hand-holding-dollar me-2"/> Add via UPI
                    </button>
                    <button className="btn btn-outline-secondary btn-sm d-flex align-items-center">
                      <i className="fa-solid fa-credit-card me-2"/> Card transfer
                    </button>
                    <button className="btn btn-outline-warning btn-sm d-flex align-items-center">
                      <i className="fa-solid fa-file-invoice-dollar me-2"/> View report
                    </button>
                  </div>

                </div>

                <div className="mt-3">
                  <h6 className="mb-2">Recent Activity</h6>
                  <ul className="list-unstyled small mb-0">
                    <li className="d-flex justify-content-between py-2 border-bottom">
                      <div>
                        <div className="fw-semibold">Payin — UPI</div>
                        <div className="text-muted">12 Dec 2025 • 10:23 AM</div>
                      </div>
                      <div className="text-success fw-bold">{currency(1000)}</div>
                    </li>
                    <li className="d-flex justify-content-between py-2 border-bottom">
                      <div>
                        <div className="fw-semibold">Withdraw — Bank</div>
                        <div className="text-muted">11 Dec 2025 • 04:12 PM</div>
                      </div>
                      <div className="text-danger fw-bold">-{currency(500)}</div>
                    </li>
                    <li className="d-flex justify-content-between py-2">
                      <div>
                        <div className="fw-semibold">Margin used</div>
                        <div className="text-muted">10 Dec 2025 • 11:00 AM</div>
                      </div>
                      <div className="fw-bold">{currency(3757.30)}</div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="mt-3 text-center small text-muted">
              <div>Need help? <a href="#">Contact support</a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Funds;
