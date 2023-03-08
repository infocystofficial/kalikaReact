import React from "react";
import "../index.css";
import location from "../images/map.png";
import email from "../images/email.png";

const Top = () => {
  return (
    <>
      <div className="top">
        <div className=" firstcol">
          <img src={location} height="16  " width="14" alt="" />
          {/* <LocationOnIcon /> */}
          <p>Butwal-10, Rupandehi</p>
        </div>
        <div className=" secondcol">
          <img src={email} height="15" width="20" alt="" />
          <p>info@kalikaschool.com.np/ kalikass.butwal2018@gmail.com</p>
        </div>
        <div className=" thirdcol">
          <p>Opening Hours : Sunday to Friday - 9 Am to 5 Pm</p>
        </div>
      </div>
    </>
  );
};

export default Top;
