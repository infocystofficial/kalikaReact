import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Top from "./Components/Top";

const App = () => {
  return (
    <>
      <Top />
      <Header />
      <div style={{ marginBottom: "0px" }}>
        <NavBar />
      </div>

      <Home />
      <Footer />
    </>
  );
};

export default App;
