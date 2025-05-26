import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import {
  faAws,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./About.scss";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hi! 👋 I'm Raja, a engineering student pursuing BTech in
            Computer Science And Engineering Specialized in IOT. I am a passionate self-learner, Cloud
            enthusiast, exploring , building projects 👨‍💻 and making things
            simple using various technologies.
          </p>
          <p align="LEFT">
            I'm very ambitious front-end  and Cloud developer looking for a role in
            established company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quietly confident, naturally curious, and love to interact with
            people and help others.
          </p>
          <p>
            If I need to define myself in one sentence that would be an
            Engineering Student interests in Reading , Music Listener, 
            and tech-obsessed!!!
          </p>
          <div className="flat_button">
            <a target="_blank" href="/Ratnala__Raja_CV.pdf">
              RESUME
            </a>
          </div>
        </div>

        <div className="stage_cube_cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="" />
    </>
  );
};

export default About;
