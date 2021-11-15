import React from "react";
import "./footer.css";
import logo from "../../assets/oogo-logo.svg";

const Footer = () => {
  return (
    <div className="oogo__footer section__padding">
      <div className="oogo__footer-links">
        <div className="oogo__footer-links_logo">
          <img src={logo} alt="oogo_logo" />
          <p>
            Book the Right-Fit Childcare ... every time. <br /> <br />
            All Rights Reserved
          </p>
        </div>
        <div className="oogo__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="oogo__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="oogo__footer-links_div">
          <h4>Contact</h4>
          <p>+353 85 872 0796</p>
          <p>hello@oogo.me</p>
          <p>Dublin, Ireland</p>
        </div>
      </div>

      <div className="oogo__footer-copyright">
        <p>@2021 Oogo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
