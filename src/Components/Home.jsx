import React from "react";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import FirstContainer from "./FirstContainer";
import Poster from "./Poster";
import SecondContainer from "./SecondContainer";
import ThirdContainer from "./ThirdContainer";

const Home = () => {
  return (
    <>
      <FirstContainer />

      <div
        style={{ display: "flex", marginLeft: "180px", marginRight: "180px" }}
      >
        <SecondContainer />
        <ThirdContainer />
      </div>

      <AboutUs />

      <Facilities />

      <Poster />
    </>
  );
};

export default Home;
