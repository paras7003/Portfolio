import React from "react";
import "./intro.css";
import bg from "../../assets/ps.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hire";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Paras</span>
          <br />
          Web Developer
        </span>
        <p className="introPara">I Like To Build FrontEnd Designs</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="hire me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
