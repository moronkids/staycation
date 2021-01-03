import React from "react";
import Header from "parts/Headers";
import "assets/scss/styles.scss";
import Crud from "pages/crud";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked.js";
const LandingPages = (props) => {
  console.log(props, "diar");
  return (
    <div>
      <Header {...props}></Header>
      {/* <Crud></Crud> */}
      <Hero data={landingPage.hero}></Hero>
      <MostPicked data={landingPage.mostPicked} />
    </div>
  );
};

export default LandingPages;
