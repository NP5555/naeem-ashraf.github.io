import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
import Taskmanager from "../assets/img/register.png";
import ageCalculatorImg from "../assets/img/agecalculator.png";
import getimage from "../assets/img/getImage.png";
import pocketdictionary from "../assets/img/pocketdictionary.png";
import todotaskqr from "../assets/img/todotaskqr.png";
import backend from "../assets/img/socialmediabackend.png";
import lifecare from "../assets/img/LifeCare-.png";
import cv from "../assets/resume/resume.pdf";
import Card from "./Card";

const Portfolio = () => {
  const projects = [
    {
      image: backend,
      title: "Social Media Application Backend",
      description:
        "The backend for this social media application is built with Nodejs and MongoDB, providing a scalable foundation for user interactions and data management. It features user authentication, post management, commenting, liking, real-time notifications, and a chat system, all accessible through a robust RESTful API. This architecture ensures high performance and security, making it ideal for a dynamic social media platform",
      link: "https://github.com/NP5555/E-Learn-Backend",
    },
    {
      image: Learnify,
      title: "Learnify",
      description:
        "Learnify is a student-focused platform offering a wide range of IT courses, including web development, UI/UX design, data science, and much more. Designed for learners of all levels, the app allows users to easily browse, purchase, and engage with high-quality courses taught by industry experts. With a user-friendly interface and dynamic learning resources, Learnify empowers students to enhance their skills and advance their careers. Visit elearnportal.uno to explore live courses and kickstart your learning journey today!",
      link: "https://github.com/NP5555",
    },
    {
      image: LinkUp,
      title: "LinkUp",
      description:
        "LinkUp is a dynamic social media app designed for seamless interaction and connectivity. Users can share updates, connect with friends, and engage in discussions. Built with React for the frontend and Node.js with Express for the backend, it ensures a smooth and responsive experience, making social networking intuitive and enjoyable for everyone.",
      link: "https://link-upsocial.netlify.app/",
    },
    {
      image: lifecare,
      title: "LifeCare",
      description:
        "LifeCare is a holistic medical health platform dedicated to enhancing well-being through expert advice, informative resources, and community support. Our mission is to empower individuals to take charge of their health and make informed decisions for a healthier life. Join us for guidance on various health topics and personalized care.",
      link: "https://life-care-lake.vercel.app/",
    },
    {
      image: Taskmanager,
      title: "Task Manager",
      description:
        "A streamlined task management tool that helps users organize, prioritize, and track tasks with deadlines and notifications.",
      link: "https://task-manager-client-blush.vercel.app/",
    },
    {
      image: ageCalculatorImg,
      title: "Age Counter",
      description:
        "A React-based tool that calculates a user age in years, months, and days. Users input their birthdate, and the app validates the date before displaying the exact age. It uses React hooks for state management and react-hot-toast for error handling. Styled with Tailwind CSS, the app provides a clean and interactive interface, allowing users to track their age with ease.",
      link: "https://countmyage.vercel.app/",
    },
    {
      image: getimage,
      title: "GetImage_",
      description:
        "A full-screen responsive image search and gallery app built with React and TailwindCSS. Features dynamic search, grid-based layout, image modal view, and download functionality using Unsplash API.",
      link: "https://getimage-one.vercel.app/",
    },
    {
      image: pocketdictionary,
      title: "Pocket Dictionary",
      description:
        "A compact React-based Pocket Dictionary app offering instant word search, definitions, and synonyms. Powered by an API for accurate word meanings, with a clean, responsive UI for easy access anywhere.",
      link: "https://pocket-dictionary-nu.vercel.app/",
    },
    {
      image: todotaskqr,
      title: "QR Task-List",
      description:
        "The QR Todo Task app allows users to create, manage, and track tasks effortlessly using QR codes. Simplify your productivity by scanning codes to access tasks on the go!",
      link: "https://todotask-app.vercel.app/",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen ">
          <div className="loader ease-linear"></div>
        </div>
      ) : (
        <>
          <header style={{ background: "#009688" }}>
            <a href="/" className="logo" style={{ color: "black" }}>
              Naeem.<span style={{ color: "white" }}>Ashraf</span>
            </a>
            <div
              className="bx bx-menu"
              id="menu-icon"
              onClick={toggleMenu}
            ></div>
            <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#home" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: "white" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: "white" }}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: "white" }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </header>
          {/* HOME */}
          <section
            className="home .fade-up animate-fade-in-up"
            style={{ background: "#009688" }}
            id="home"
          >
            <div className="social">
              <a href="https://github.com/NP5555">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://medium.com/@ngs.naeemashraf">
                <i className="bx bxl-medium"></i>
              </a>
              <a href="https://www.linkedin.com/in/naeem-ashraf-242663190/">
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://www.upwork.com/">
                <i className="bx bxl-upwork"></i>
              </a>
            </div>
            <div className="home-img">
              <img
                alt="Naeem Ashraf"
                style={{ borderRadius: "20%", marginTop: "20px" }}
                src={MyImg}
              />
            </div>
            <div className="home-text">
              <span className="text-black">Hello, I'm</span>
              <h1 className="font-bold text-yellow-400">Naeem Ashraf</h1>
              <h2 className="text-teal-50">
                {" "}
                Professional Front-End Web & Application Developer
              </h2>
              <p className="text-teal-50">
                Looking for a skilled developer to create a responsive, modern
                website or app? I deliver high-quality, user-friendly solutions
                tailored to your needs. Let’s bring your vision to life—hire me
                today!
              </p>
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                download="NaeemAshraf-Resume.pdf"
                style={{ backgroundColor: "black" }}
                className="btn mt-3"
              >
                Download Resume
              </a>
            </div>
          </section>
          {/* INTRO */}
          <section
            className="fadeInUp animate-fade-in-up"
            style={{ background: "#009688" }}
            id="about"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>About Me</h2>
              <span style={{ color: "white" }}>Introduction</span>
            </div>
            <div className="about-container">
              <div className="about-img">
                <img
                  alt="Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
              <div className="about-text">
                <p className="text-teal-50">
                  Hi, I am Naeem. I'm an experienced frontend developer with 3+
                  years of expertise in building responsive web applications
                  using HTML, CSS, JavaScript, Bootstrap - React, and various
                  frameworks. I specialize in developing web apps, converting
                  PSD, XD, Figma designs into RESPONSIVE HTML/CSS, and more.
                </p>
                <div className="information">
                  <div className="info-box">
                    <i className="bx bx-laptop"></i>{" "}
                    <span className="text-teal-50">Muhammad Naeem Ashraf</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-phone"></i>{" "}
                    <span className=" text-teal-50">+92-334-3288667</span>
                  </div>
                  <div className="info-box">
                    <i className="bx bxs-envelope"></i>{" "}
                    <span className="text-teal-50">
                      <a href="mailto:naeemashrafpansota@gmail.com">
                        naeemashrafpansota@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/NP5555"
                  style={{ backgroundColor: "black" }}
                  className="btn"
                >
                  Information
                </a>
              </div>
            </div>
          </section>
          {/* SKILLS */}
          <section
            className="skills animate-fade-in-up"
            style={{ background: "#009688" }}
            id="skills"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Skills</h2>
              <span style={{ color: "white" }}>My Skills</span>
            </div>
            <div className="skills-container">
              <div className="bars">
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    HTML-Css-Tailwind
                  </h3>
                  <span style={{ color: "white" }}>94%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar html-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    JavaScript-npm
                  </h3>
                  <span style={{ color: "white" }}>84%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar css-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    ReactJs-NextJs-NodeJs-ExpressJs
                  </h3>
                  <span style={{ color: "white" }}>74%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar js-bar"></div>
                </div>
                <div className="bars-box placeholder-wave">
                  <h3 style={{ color: "white", fontWeight: "bold" }}>
                    MySQL-MongooDB
                  </h3>
                  <span style={{ color: "white" }}>80%</span>
                  <div className="light-bar"></div>
                  <div className="percent-bar react-bar"></div>
                </div>
              </div>
              <div className="skills-img">
                <img
                  alt="Naeem Ashraf"
                  style={{ borderRadius: "20%" }}
                  src={MyImg}
                />
              </div>
            </div>
          </section>
          {/* PROJECTS */}
          <section
            className="projects animate-fade-in-up"
            style={{ background: "#009688" }}
            id="projects"
          >
            <div className="heading mb-10">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Projects</h2>
              <span style={{ color: "white" }}>some of my work"</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </div>
          </section>
          {/* Contact */}
          <section
            className="contact animate-fade-in-up"
            style={{ background: "#009688" }}
            id="contact"
          >
            <div className="heading">
              <h2 style={{ color: "black", fontWeight: "bold" }}>Contact</h2>
              <span style={{ color: "white" }}>Connect With Me</span>
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
                <button
                  type="submit"
                  className="btn  hover:text-black hover:bg-black text-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
          {/* Footer */}
          <div className="copyright">
            <p>
              &#169; Naeem Ashraf. All Right Reserved{" "}
              <a href="https://github.com/NP5555">
                {" "}
                <i
                  className="bx bxl-github text-[25px]
                "
                ></i>
              </a>{" "}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
