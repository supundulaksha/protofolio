import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/download_cv.png";
import resume from "../../assets/supun-resume.pdf";

// Move titles outside the component
const titles = ["UI/UX Designer", "Web Developer", "Software Engineer"];

const Intro = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(interval);
  }, []);  // empty dependency array is correct now

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Supun</span> <br />
          <span className="titleAnimation">{titles[currentTitle]}</span>
        </span>
        <p className="introPara">
          I create visually appealing and user-friendly digital experiences
          <br />
          with a focus on clean design and efficient code.
        </p>
        <a href={resume} download="supun-resume.pdf">
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" /> Download CV
          </button>
        </a>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
