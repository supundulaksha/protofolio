import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../../assets/my-img.png";
import btnImg from "../../assets/download_cv.png";
import resume from "../../assets/supun-resume.pdf";

const titles = ["UI/UX Designer", "Web Developer", "Software Engineer"];

const Intro = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Supun</span> <br />
          <span className="titleAnimation">{titles[currentTitle]}</span>
        </span>
        <p className="introPara">
          {isMobile ? (
            "I create beautiful, user-friendly digital experiences with clean design."
          ) : (
            <>
              I create visually appealing and user-friendly digital experiences
              <br />
              with a focus on clean design and efficient code.
            </>
          )}
        </p>
        <a href={resume} download="supun-resume.pdf">
          <button className="btn">
            <img src={btnImg} alt="Download" className="btnImg" /> Download CV
          </button>
        </a>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;