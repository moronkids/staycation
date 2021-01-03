import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icon-cities.svg";
import IconTraveler from "assets/images/icon-traveler.svg";
import IconTreasure from "assets/images/icon-treasure.svg";
import Button from "elements/Button";
const Hero = (props) => {
  const showMostPicked = (props) => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <section className="container pt-4">
      <div className="row align-items-center pl-3">
        <div className="col-auto pr-5" style={{ width: 510 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show me
          </Button>
          <div className="row mt-5">
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers}`}
                className="src"
              />
              <h6 className="mt-3">
                {props.data.travelers}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures}`}
                className="src"
              />
              <h6 className="mt-3">
                {props.data.treasures}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities}`}
                className="src"
              />
              <h6 className="mt-3">
                {props.data.cities}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt=""
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt=""
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px 0 -15px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
