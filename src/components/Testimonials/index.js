import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card";
import testimonialsLeft from "../../assets/images/testimonials-01.jpg";
import testimonialsRight from "../../assets/images/testimonials-02.jpg";
import profilePicture from "../../assets/images/testimonial-pic.jpg";

import "./style.css";

/**
 * @author
 * @function Testimonials
 **/

const Testimonials = (props) => {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What people say" />
      </div>
      <div
        className="flexRow wrap align-center justify-sb"
        style={{ padding: "50px 0" }}
      >
        <div data-aos="fade-left" className="testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <Card data-aos="zoom-in" className="myCard">
          <div className="flexRow align-center">
            <div className="profileImgContainer">
              <img src={profilePicture} alt="" />
            </div>
            <div className="mlr-10">
              <p className="primaryColor font-16">Sophia</p>
              <p className="textColor font-14 bold-600">IoT Device Developer</p>
            </div>
          </div>
          <p className="mtb-10 grey">
            <b style={{ color: "black" }}>Afreen Karikatti</b>, Electronics
            engineers work on a variety of electronic projects ranging from cell
            phones to robots. Electronic engineer skills often include both
            technical skills and soft skills, as engineers work on highly
            technical projects but also have to communicate and collaborate. If
            you're an electronic engineer who is hoping to develop your skills
            in order to find a new position or advance at your current company,
            understanding what your key skills are, how to develop your skills
            and how to show them during the hiring process can all be helpful.
          </p>
        </Card>
        <div data-aos="fade-right" className="testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>

      <Card className="m-auto contactCard">
        <p className="text-center font-12 mtb-10">
          Have any project in mind?{" "}
          <span className="primaryColor">Say Hello At</span>
        </p>
        <p className="text-center font-25">afreenkr2000@gmail.com</p>
      </Card>
    </div>
  );
};

export default Testimonials;
