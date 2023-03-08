import React from "react";
import logo from "../images/logokalika.png";
import facebook from "../images/facebooklogo.webp";
import twitter from "../images/twitterlogo.webp";
import google from "../images/googlelogo.webp";
import insta from "../images/instalogo.webp";

const Footer = () => {
  return (
    <>
      <div className="foter">
        <div className="firstco fot">
          <img src={logo} height="100" width="120" alt="" />
          <p>
            Kalika Secondary School is located in Butwal <br />{" "}
            Sub-metropolitan, Rupandehi, Lumbini Zone <br /> which was
            established in 2018 B.S (1961 <br /> A.D) with the help of local
            residents.
          </p>
          <div className="socialicon">
            <a href="https://www.facebook.com/">
              <img src={facebook} height="15" width="15" alt="" />
            </a>
            <a href="https://www.twitter.com/">
              <img src={twitter} height="15" width="15" alt="" />
            </a>
            <a href="https://www.google.com/">
              <img src={google} height="15" width="15" alt="" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={insta} height="15" width="15" alt="" />
            </a>
          </div>
        </div>
        <div className="secondco fot">
          <h5>Sitemap</h5>
          <a href="index.html">Home</a> <br />
          <a href="about.html">About Us</a> <br />
          <a href="onlineresult.html">Online Result</a>
          <p> Policy</p>
          <p> News</p>
          <p> Program</p>
          <p> Galary</p>
        </div>
        <div className="thirdco fot">
          <h5>Support</h5>
          <p id="faq"> FAQS</p>
          <p> Rules & Regulations</p>
          <p> Policy</p>
          <p> Require Documentation</p>
        </div>
        <div className="fourthco fot">
          <h5>Contact Us</h5>
          <div className="contafirst">
            <i className="fa fa-home"></i>
            <p>Butwal-10, Rupandehi</p>
          </div>
          <div className="contasecond">
            <i className="fa fa-phone"></i>
            <p>071-437392</p>
          </div>
          <div className="contathird">
            <i className="fa fa-envelope"></i>
            <p>
              info@kalikaschool.com.np/ <br /> kalikass.butwal2018@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
