import React from "react";
import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./style.css";
import resume from "../../assets/Afreen Resume1.pdf";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Afreen Karikatti
          </p>
          <h1 className="textColor ls-1 mtb-10">
            Software & Hardware Engineer
          </h1>
          <p className="font-12 grey mtb-10">Electronic Development Engineer</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button label="Hire Me"></Button>
            </div>
            <div className="mlr-10">
              <a
                className="download_resume"
                href={resume}
                download
                rel="noopener noreferrer"
                target="_blank"
              >
                Download CV
              </a>
              {/* <Button label="Download CV" inverse={true} /> */}
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
