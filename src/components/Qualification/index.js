import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import me from "../../assets/images/me-left.png";
import resume from "../../assets/Afreen Resume1.pdf";

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
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
        <div>
          <Tile
            title="Tontadarya College of Eng. Gadag(VTU)"
            mediumTitle="B.E.(ELectronics and Communication Engineering)"
            desc="2022"
          />
          <Tile
            title="Smt. Vidya P Hanchinmani PU Science Clg. Dharwad"
            mediumTitle="PUC"
            desc="2018"
          />
          <Tile
            title="Presentation Girls High School Dharwad"
            mediumTitle="SSLC"
            desc="2016"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
