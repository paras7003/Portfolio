import React from "react";
import UIDesign from "../../assets/uxx.png";
import webDesign from "../../assets/webdes.png";
import webDev from "../../assets/dplp.png";
import "./Skill.css";

const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am Skilled and Passionate Web Developer
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>I Design User Interfaces</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>I Design Websites</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDev} alt="webDev" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>I Develop Web</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
