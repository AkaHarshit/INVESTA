// frontend/src/landing_page/Footer.js
import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.PNG" style={{ width: "50%" }} alt="Logo" />
            <p className="mt-3">
              &copy; 2010 - 2026, Not Investa Broking Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="col">
            <p className="fw-bold mb-3">Company</p>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">About</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Products</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Pricing</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Referral programme</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Careers</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Investa.tech</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Press & media</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Investa cares (CSR)</a>
          </div>
          
          <div className="col">
            <p className="fw-bold mb-3">Support</p>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Contact</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Support portal</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Z-Connect blog</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">List of charges</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Downloads & resources</a>
          </div>
          
          <div className="col">
            <p className="fw-bold mb-3">Account</p>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Open an account</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">Fund transfer</a>
            <a href="" style={{ textDecoration: "none", color: "#000" }} className="d-block mb-2">60 day challenge</a>
          </div>
        </div>
        
        <div className="mt-5 text-muted pb-4" style={{ fontSize: "14px" }}>
          <p className="mb-3">
            Investa Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Investa Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Investa Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Investa Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@investa.com, for DP related to dp@investa.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p className="mb-3">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p className="mb-3">
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p className="mb-3">
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Investa and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;