import React, { useEffect, useState } from "react";
import "../assets/css/style.css";
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
import Taskmanager from "../assets/img/register.png";
import ageCalculatorImg from "../assets/img/agecalculator.png";
import backend from "../assets/img/socialmediabackend.png";
import lifecare from "../assets/img/LifeCare-.png";
import Subcription from "../assets/img/Subcription.png";
// Placeholder images for blockchain projects - these should be replaced with actual project images
import blockchainMinting from "../assets/img/ethermint.png";  
import blockchainWallet from "../assets/img/wallet.png";
import blockchainDapp from "../assets/img/dapp.jpg";

import cv from "../assets/resume/resume.pdf";
import Card from "./Card";

const Portfolio = () => {
  const projects = [
    {
      image: blockchainMinting,
      title: "NFT Minting Platform",
      description:
        "A comprehensive NFT minting platform built with React and Solidity. Integrated with ERC-721 smart contracts, the application allows users to create, mint, and trade NFTs on the Ethereum blockchain. Features include metamask wallet integration, IPFS storage for digital assets, and a responsive UI/UX design for seamless user experience.",
      link: "https://github.com/NP5555",
    },
    {
      image: blockchainWallet,
      title: "Blockchain Wallet Integration",
      description:
        "Developed a secure cryptocurrency wallet application that supports multiple blockchain networks. Built with React Native for cross-platform functionality, this wallet implements industry-standard security protocols for private key management, transaction signing, and secure storage. Integrated with Web3.js for blockchain interactions.",
      link: "https://github.com/NP5555",
    },
    {
      image: blockchainDapp,
      title: "DeFi Application",
      description:
        "A decentralized finance application built on Ethereum using Solidity smart contracts and React. This DApp allows users to stake tokens, participate in liquidity pools, and earn yields through smart contract interactions. Features real-time blockchain data feeds and gas optimization for efficient transactions.",
      link: "https://github.com/NP5555",
    },
    {
      image: Subcription,
      title: "Stripe Payment Integration and Subscription Management Platform",
      description:
        "This full-stack project provides a seamless e-commerce experience for handling both one-time purchases and recurring subscriptions. Built with a React frontend and a Node.js backend, the application integrates with Stripe to offer dynamic and secure payment processing. It showcases a pricing page where users can browse product plans with real-time price updates, apply coupon codes, and choose between subscription and one-time purchase options.",
      link: "https://github.com/NP5555/Strip-Subcription-Integration-MERN-frontend/",
    },
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
          <header style={{ background: "#1a2b4b" }}>
            <a href="/" className="logo" style={{ color: "#f7b731" }}>
              <i className="bx bxl-bitcoin mr-2"></i>
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
                  <i className="bx bxs-home mr-1"></i> Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: "white" }}>
                  <i className="bx bxs-user mr-1"></i> About
                </a>
              </li>
              <li>
                <a href="#skills" style={{ color: "white" }}>
                  <i className="bx bxs-coin-stack mr-1"></i> Skills
                </a>
              </li>
              <li>
                <a href="#projects" style={{ color: "white" }}>
                  <i className="bx bxs-cube mr-1"></i> Projects
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: "white" }}>
                  <i className="bx bxs-envelope mr-1"></i> Contact
                </a>
              </li>
            </ul>
          </header>
          {/* HOME */}
          <section
            className="home .fade-up animate-fade-in-up"
            style={{ background: "#1a2b4b" }}
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
                style={{ borderRadius: "20%", marginTop: "20px", border: "3px solid #f7b731" }}
                src={MyImg}
              />
            </div>
            <div className="home-text">
              <span className="text-yellow-300">Hello, I'm</span>
              <h1 className="font-bold text-yellow-400">Naeem Ashraf</h1>
              <h2 className="text-teal-50">
                Blockchain Developer & Full Stack Engineer
              </h2>
              <p className="text-teal-50">
                Specialized in blockchain technologies and full-stack development. 
                Currently working at TheHash.io in Lahore as a Blockchain Developer. 
                I build decentralized applications, smart contracts, and modern web experiences 
                with a focus on security, scalability, and user experience.
              </p>
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                download="NaeemAshraf-Resume.pdf"
                style={{ backgroundColor: "#f7b731", color: "#1a2b4b" }}
                className="btn mt-3 hover:bg-white"
              >
                Download Resume
              </a>
            </div>
          </section>
          {/* INTRO */}
          <section
            className="fadeInUp animate-fade-in-up"
            style={{ background: "#1a2b4b" }}
            id="about"
          >
            <div className="heading">
              <h2 style={{ color: "#f7b731", fontWeight: "bold" }}>About Me</h2>
              <span style={{ color: "white" }}>Introduction</span>
            </div>
            <div className="about-container">
              <div className="about-img">
                <img
                  alt="Naeem Ashraf"
                  style={{ borderRadius: "20%", border: "3px solid #f7b731" }}
                  src={MyImg}
                />
              </div>
              <div className="about-text">
                <p className="text-teal-50">
                  Hi, I am Naeem. I'm a Blockchain Developer with expertise in building decentralized 
                  applications and smart contracts. Currently working at TheHash.io in Lahore, I specialize 
                  in developing secure and efficient blockchain solutions. I have experience with ERC20/ERC721 token 
                  standards, Web3.js, Solidity, IPFS, and various blockchain networks. My full-stack skills include 
                  React, Node.js, and modern web technologies to create seamless user experiences.
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
                  <div className="info-box">
                    <i className="bx bxs-briefcase"></i>{" "}
                    <span className="text-teal-50">
                      Blockchain Developer at TheHash.io
                    </span>
                  </div>
                </div>
                <a
                  href="https://github.com/NP5555"
                  style={{ backgroundColor: "#f7b731", color: "#1a2b4b" }}
                  className="btn hover:bg-white"
                >
                  Information
                </a>
              </div>
            </div>
          </section>
          {/* SKILLS */}
          <section
            className="skills animate-fade-in-up"
            style={{ background: "#1a2b4b" }}
            id="skills"
          >
            <div className="heading">
              <h2 style={{ color: "#f7b731", fontWeight: "bold" }}>Skills</h2>
              <span style={{ color: "white" }}>My Technical Expertise</span>
            </div>
            <div className="skills-container">
              <div className="bars">
                <div className="skills-grid">
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bxl-html5"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        HTML-CSS-Tailwind
                      </h3>
                      <span style={{ color: "white" }}>94%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar html-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bxl-javascript"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        JavaScript-npm
                      </h3>
                      <span style={{ color: "white" }}>84%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar css-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bxl-react"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        ReactJs-NextJs-NodeJs
                      </h3>
                      <span style={{ color: "white" }}>85%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar js-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bxs-data"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        MySQL-MongoDB
                      </h3>
                      <span style={{ color: "white" }}>80%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar react-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bx-code-block"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        Solidity-Smart Contracts
                      </h3>
                      <span style={{ color: "white" }}>78%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar blockchain-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bx-link"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        Web3.js-Ethers.js
                      </h3>
                      <span style={{ color: "white" }}>82%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar web3-bar"></div>
                    </div>
                  </div>
                  
                  <div className="bars-box placeholder-wave">
                    <div className="skill-icon">
                      <i className="bx bx-cloud"></i>
                    </div>
                    <div className="skill-info">
                      <h3 style={{ color: "white", fontWeight: "bold" }}>
                        IPFS-Decentralized Storage
                      </h3>
                      <span style={{ color: "white" }}>75%</span>
                      <div className="light-bar"></div>
                      <div className="percent-bar ipfs-bar"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skills-img">
                <img
                  alt="Naeem Ashraf"
                  style={{ borderRadius: "20%", border: "3px solid #f7b731" }}
                  src={MyImg}
                />
              </div>
            </div>
          </section>
          {/* PROJECTS */}
          <section
            className="projects animate-fade-in-up"
            style={{ background: "#1a2b4b" }}
            id="projects"
          >
            <div className="heading mb-10">
              <h2 style={{ color: "#f7b731", fontWeight: "bold" }}>Projects</h2>
              <span style={{ color: "white" }}>Some of my work</span>
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
            style={{ background: "#1a2b4b" }}
            id="contact"
          >
            <div className="heading">
              <h2 style={{ color: "#f7b731", fontWeight: "bold" }}>Contact</h2>
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
                  style={{ backgroundColor: "#f7b731", color: "#1a2b4b" }}
                  className="btn hover:bg-white hover:text-black"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
          {/* Footer */}
          <div className="copyright" style={{ background: "#152238" }}>
            <p>
              &#169; Naeem Ashraf. All Right Reserved{" "}
              <a href="https://github.com/NP5555">
                {" "}
                <i
                  className="bx bxl-github text-[25px] text-yellow-400
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
