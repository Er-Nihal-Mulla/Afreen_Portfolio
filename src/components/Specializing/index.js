import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Skill from "../UI/Skill";
import { colors } from "../../style";

/**
 * @author
 * @function Specializing
 **/

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in Html/Css",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f2a154",
    },
    {
      skillName: "C Programming",
      desc: "Hands on experience in C",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },
    {
      skillName: "Python",
      desc: "Hands on experience in Python",
      value: 90,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },
    {
      skillName: "Embedded C",
      desc: "Experience in Embedded C",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "semiconductor/VLSI design",
      desc: "Hands On semiconductor/VLSI design",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },
    {
      skillName: "Embedded systems",
      desc: "Skill in Embedded systems",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#54e346",
    },
    {
      skillName: "Cadence Tool",
      desc: "Hands on experience in Cadence tool",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#111d5e",
    },
    {
      skillName: "Linux & Xilinx",
      desc: "Knowledge in Linux & Xilinx",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];

  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I do" />
        <MediumHeading text="Specializing in" />
        <div
          data-aos="fade-up"
          className="flexRow wrap justify-sb"
          style={{ padding: "30px" }}
        >
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
