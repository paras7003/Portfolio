import React from "react";
import "./Contact.css";
import facebookicon from "../../assets/facebookicon.png";
import twittericon from "../../assets/twitter.png";
import youtubeicon from "../../assets/youtube.png";
import instagramicon from "../../assets/is.jpg";
const Contact = () => {
  return (
    <section id="contactPage">
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please Fill out the Form Below to discuss any work Opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Enter Your Name" />
          <input
            type="email"
            className="email"
            placeholder="Enter Your Email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Enter Your Message"
          />
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={facebookicon} alt="facebook" className="link" />
            <img src={twittericon} alt="twitter" className="link" />
            <img src={youtubeicon} alt="youtube" className="link" />
            <img src={instagramicon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
