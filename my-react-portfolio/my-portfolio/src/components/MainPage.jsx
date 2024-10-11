import React, { useEffect, useState } from "react";
import "../assets/css/style.css"; // Assuming you have your CSS in a file named 'style.css'
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
import Ai from "../assets/img/GenerativeAi.png";
import TaskManager from "../assets/img/project4.png";


const Portfolio = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate content loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, hide the loader
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <div>
      {loading ? (
        // Loader component
        <div className="flex items-center justify-center h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        </div>
      ) : (
        <>
          <header>
            <a href="#" className="logo">
              Naeem.<span>Ashraf</span>
            </a>
            <div className="bx bx-menu" id="menu-icon"></div>
            <ul className="navbar">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <div className="bx bx-moon" id="darkmode"></div>
            </ul>
          </header>

          {/* Rest of your content */}
          <section className="home" id="home">
            <div className="social">
              <a href="https://github.com/NP5555">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://facebook.com">
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
            <div className="home-img">
              <img
                alt="Image of Naeem Ashraf"
                style={{ borderRadius: "20%", marginTop: "20px" }}
                src={MyImg}
              />
            </div>
            <div className="home-text">
              <span>Hello, I'm</span>
              <h1>Naeem Ashraf</h1>
              <h2>FrontEnd Web/Application Developer</h2>
              <p>
                I am a Web/Application developer, experienced in this sector. If
                you need to build a professional website, you can hire me! You
                can choose any of my services or plans.
              </p>
              <a href="https://github.com/NP5555" className="btn">
                Download CV
              </a>
            </div>
          </section>

          <section className="animate-fade-in-up" id="about">
            <div className="heading">
              <h2>About Me</h2>
              <span>Introduction</span>
            </div>
            <div className="about-container">
              <div className="about-img">
                <img
                  alt="Image of Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
              <div className="about-text">
                <p>
                  Hi, I am Naeem. I'm an experienced frontend developer with 3+
                  years of expertise in building responsive web applications
                  using HTML, CSS, JavaScript, Bootstrap - React, and various
                  frameworks. I specialize in developing web apps, converting
                  PSD, XD, Figma designs into RESPONSIVE HTML/CSS, and more.
                </p>
                <div className="information">
                  <div className="info-box">
                    <i className="bx bx-laptop"></i> <span>Naeem Ashraf</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-phone"></i> <span>+923343288667</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-envelope"></i>{" "}
                    <span>
                      <a href="mailto:naeemashrafpansota@gmail.com">
                        naeemashrafpansota@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <a href="https://github.com/NP5555" className="btn">
                  Download CV
                </a>
              </div>
            </div>
          </section>

          <section className="skills animate-fade-in-up" id="skills">
            <div className="heading">
              <h2>Skills</h2>
              <span>My Skills</span>
            </div>
            <div className="skills-container">
              <div className="bars">
                <div className="bars-box placeholder-wave">
                  <h3>HTML</h3>
                  <span>94%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar html-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3>CSS</h3>
                  <span>84%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar css-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3>JavaScript</h3>
                  <span>74%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar js-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3>MERN</h3>
                  <span>80%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar react-bar"></div>
                </div>
              </div>
              <div className="skills-img">
                <img
                  alt="Image of Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
            </div>
          </section>

          <section className="services animate-fade-in-up" id="projects">
            <div className="heading">
              <h2>Projects</h2>
              <span>My Work</span>
            </div>
            <div className="services-content">
              <div className="services-box">
                <img
                  src={Learnify}
                  alt="Learnify Project Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h3>Learnify</h3>
                <a href="https://www.elearnportal.uno">Learn More</a>
              </div>

              <div className="services-box">
                <img
                  src={LinkUp}
                  alt="LinkUp Project Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h3>LinkUp</h3>
                <a href="https://link-upsocial.netlify.app">Learn More</a>
              </div>

              <div className="services-box">
                <img
                  src={TaskManager}
                  alt="Task Manager Project Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h3>Task Manager</h3>
                <a href="https://github.com/NP5555">Learn More</a>
              </div>

              <div className="services-box">
                <img
                  src={Ai}
                  alt="Generative AI Project Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h3>Generative AI Prompt</h3>
                <a href="https://generativeai-mu.vercel.app/">Learn More</a>
              </div>
            </div>
          </section>

          <section className="contact animate-fade-in-up" id="contact">
            <div className="heading">
              <h2>Contact</h2>
              <span>Connect With Me</span>
            </div>
            <div className="contact-form">
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="8"
                  required
                ></textarea>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>

          </section>
          <div className="copyright">
              <p>&#169; Naeem Ashraf. All Right Reserved</p>
            </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
