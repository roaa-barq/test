import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <text className="titleFo">Contact us</text>
      <div className="contactDiv">
        <img className="icon" src="/instagram.png"></img>
        <text>@daisy._._store</text>
      </div>
      <div className="contactDiv">
        <img className="icon" src="/whatsapp.png"></img>
        <text>+970592885056</text>
      </div>
    </div>
  );
};

export default Footer;
