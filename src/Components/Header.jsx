import React from "react";
import "../index.css";
import logo from "../images/kalikalogo.png";
import support from "../images/support.png";

const Header = () => {
  return (
    <>
      <div className="kalikalogo">
        <div className="logo ">
          <img src={logo} alt="" />
          {/* <logo /> */}
        </div>
        <div className="helpinghand ">
          <div className="pic">
            <img src={support} height="40" alt="" />
          </div>
          <div className="content">
            <p id="help">Need Help? Call Us</p>
            <p id="contac"> 071-437392</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
