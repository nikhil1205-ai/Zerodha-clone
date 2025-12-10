import React, { PureComponent } from 'react';
import logo from '../assets/logo.svg'; 

function Footer() {
    return ( 
        <div className="container">
            <div className="row my-5">
                <div className="col-3">
                    <img src={logo} alt="" style={{width:"50%"}}/>
                    <p className='fs-6 text-muted'>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                    <i class="fa-brands fa-x-twitter mx-2 fs-5"></i>
                    <i class="fa-brands fa-facebook mx-2 fs-5"></i>
                    <i class="fa-brands fa-instagram mx-2 fs-5"></i>
                    <i class="fa-brands fa-square-linkedin mx-2 fs-5"></i>
                    <i class="fa-brands fa-youtube mx-2 fs-5"></i>
                </div>
                <div className="col">
                        <p class="fw-bold mb-2 fs-5">Account</p>
                        <p class="text-muted">Open demat account</p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">Minor demat account</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">NRI demat account</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">Commodity</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">Dematerialisation</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">Fund transfer</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">MTF</a></p>
                        <p class="text-muted"><a href="" class="text-muted text-decoration-none">Referral program</a></p>
                </div>
                <div className="col">
                        <p class="fw-bold mb-2 fs-5">Support</p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Contact us</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Support portal</a>
                        </p>

                        <p class="text-muted">
                            <a target="_blank" href="" class="text-muted text-decoration-none">
                                How to file a complaint?
                            </a>
                        </p>

                        <p class="text-muted">
                            <a target="_blank" href="" class="text-muted text-decoration-none">
                                Status of your complaints
                            </a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Bulletin</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Circular</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Z-Connect blog</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Downloads</a>
                        </p>
                </div>
                <div className="col">
                        <p class="fw-bold mb-2 fs-5">Company</p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">About</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Philosophy</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Press &amp; media</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Careers</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Zerodha Cares (CSR)</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Zerodha.tech</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Open source</a>
                        </p>

                </div>
                <div className="col">
                        <p class="fw-bold mb-2 fs-5">Quick links</p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Upcoming IPOs</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Brokerage charges</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Market holidays</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Economic calendar</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Calculators</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Markets</a>
                        </p>

                        <p class="text-muted">
                            <a href="" class="text-muted text-decoration-none">Sectors</a>
                        </p>
                </div>
            </div>
            <div className="row">
                    <p  className="text-muted px-5" style={{fontSize:"10px"}}>
                        <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
                        Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
                        Registered Address: Zerodha
                        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
                        any complaints pertaining to securities broking please write to
                        <a href="">complaints@zerodha.com</a>, for
                        DP related to <a href="">dp@zerodha.com</a>. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed by
                        SEBI | ICF
                        </p>
                        <p>
                        Procedure to file a complaint on <a rel="nofollow" href="" target="_blank">SEBI SCORES</a>:
                        Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
                        E-mail ID.
                        Benefits: Effective Communication, Speedy redressal of the grievances
                        </p>
                        <p>
                            <a rel="nofollow" href="" target="_blank">Smart Online Dispute Resolution</a> | <a href="" target="_blank">Grievances Redressal Mechanism</a>
                        </p>
                        <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                        </p>
                        <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                        </p>
                        <p>
                            India's largest broker based on networth as per NSE. <a rel="nofollow" href="" target="_blank">NSE broker factsheet</a>
                        </p>
                        <p>
                        "Prevent unauthorised transactions in your account. Update your mobile
                        numbers/email IDs with your stock brokers. Receive information of your
                        transactions directly from Exchange on your mobile/email at the end of
                        the day. Issued in the interest of investors. KYC is one time exercise
                        while dealing in securities markets - once KYC is done through a SEBI
                        registered intermediary (broker, DP, Mutual Fund etc.), you need not
                        undergo the same process again when you approach another intermediary."
                        Dear Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the IPO
                        application form to authorize your bank to make payment in case of
                        allotment. In case of non allotment the funds will remain in your bank
                        account. As a business we don't give stock tips, and have not authorized
                        anyone to trade on behalf of others. If you find anyone claiming to be
                        part of Zerodha and offering such services, please
                        <a href="">create
                            a ticket here</a>.
                        </p>
                        <p>
                            *Customers availing insurance advisory services offered by Ditto
                            (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) 
                            will not have access to the exchange investor grievance redressal forum,
                            SEBI SCORES/ODR, or arbitration mechanism for such products.
                        </p>
                    </p>


                    <div class="footer-graveyard-links text-center">

                        <p class="d-inline-block mx-2 text-muted">
                            <a rel="nofollow" href="" class="text-muted text-decoration-none">NSE</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a rel="nofollow" href="" class="text-muted text-decoration-none">BSE</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a rel="nofollow" href="" class="text-muted text-decoration-none">MCX</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">Terms &amp; conditions</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">Policies &amp; procedures</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">Privacy policy</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">Disclosure</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">For investor's attention</a>
                        </p>

                        <p class="d-inline-block mx-2 text-muted">
                            <a href="" class="text-muted text-decoration-none">Investor charter</a>
                        </p>

                    </div>


            </div>
        </div>
    );
}


export default Footer;