import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiMedium, SiUpwork } from "react-icons/si";
import AboutSkills from "./AboutSkills";
import "../assets/css/style.css";

// Images
import MyImg from "../assets/img/main.jpeg";
import Learnify from "../assets/img/PROJECT1.png";
import LinkUp from "../assets/img/project2.png";
// import Taskmanager from "../assets/img/register.png";
import ageCalculatorImg from "../assets/img/agecalculator.png";
import backend from "../assets/img/socialmediabackend.png";
import lifecare from "../assets/img/LifeCare-.png";
import Subcription from "../assets/img/Subcription.png";
import blockchainMinting from "../assets/img/ethermint.png";  
import blockchainWallet from "../assets/img/wallet.png";
import blockchainDapp from "../assets/img/dapp.jpg";
import dataropes from "../assets/img/dataropes.png";
import pawsure from "../assets/img/pawsure.png";
import maakdream from "../assets/img/maakdream.png";
import homeowner from "../assets/img/hoc.png";
import instaflow from "../assets/img/instaflow.png"; // Using agecalculator.png as placeholder for InstaFlow
import hocBackend from "../assets/img/hocbackend.png"; // Using socialmediabackend.png as placeholder for HOC Backend
import chessArena from "../assets/img/chess.jpeg"; // Using ethermint.png as placeholder for Blockchain Chess Arena

import cv from "../assets/resume/resume.pdf";
import Card from "./Card";

const Portfolio = () => {
  const projects = [
    {
      image: instaflow,
      title: "InstaFlow - AI-powered Instagram Management",
      description:
        "Developed InstaFlow, an AI-powered Instagram management platform that helps users automate their Instagram activities using an intelligent agent. The application enables scheduling posts, analyzing engagement, and optimizing content strategy. Built with Next.js, Supabase, and integrated with Instagram API, the platform features an intelligent agent system and game-like elements to enhance user experience.",
      link: "https://github.com/NP5555",
    },
    {
      image: hocBackend,
      title: "House Owner Club Backend",
      description:
        "Built the backend infrastructure for House Owner Club using NestJS and PostgreSQL. The system features JWT authentication, database migrations, and integration with Pinata IPFS for decentralized storage. The backend provides instant feedback and excellent developer experience, with optimized deployment on Render. This robust API powers the House Owner Club platform with secure and scalable services.",
      link: "https://github.com/NP5555",
    },
    {
      image: chessArena,
      title: "Blockchain Chess Arena",
      description:
        "Created a decentralized, play-to-earn chess platform on blockchain. Blockchain Chess Arena allows users to play chess while earning cryptocurrency, combining strategic gameplay with blockchain rewards. The platform implements smart contracts for secure transactions, player matching, and reward distribution, offering a unique gaming experience where players can monetize their chess skills.",
      link: "https://github.com/NP5555",
    },
    {
      image: homeowner,
      title: "Home Owner Club",
      description:
        "Developed Home Owner Club, a platform built for everyone who wants to participate in the international property and real estate market. The platform connects property buyers, sellers, and investors worldwide, providing tools for property listing, searching, and investment analysis. Features include user authentication, property management, interactive maps, messaging system, and payment processing. Built with modern web technologies to ensure a seamless user experience.",
      link: "https://myhoc.io",
    },
    {
      image: maakdream,
      title: "MAAKDREAM Construction Company Website",
      description:
        "Developed a professional React-based website for MAAKDREAM, a construction company that works with the government in Lahore. The website showcases their portfolio of construction projects, services offered, and company information. Features include an interactive project gallery, service descriptions, team profiles, and contact forms. The responsive design ensures optimal viewing experience across all devices while maintaining the company's professional brand identity.",
      link: "https://maakdream.com",
    },
    {
      image: pawsure,
      title: "Pawsure - Dog Lovers Community App",
      description:
        "Developed a React Native mobile application for dog lovers community called 'Pawsure'. The app provides a platform for dog owners to connect, share experiences, find dog-friendly locations, and access pet care resources. Features include user profiles, social feed, event scheduling, photo sharing, and real-time notifications. The app was built with React Native, ensuring cross-platform functionality for both iOS and Android users.",
      link: "https://www.paw-sure.com",
    },
    {
      image: dataropes,
      title: "DataRopes.ai",
      description:
        "Migrated and built the DataRopes.ai website on Webflow, creating a modern and responsive platform. The project involved translating design requirements into a fully functional website with optimized user experience, custom animations, and seamless navigation. The implementation leveraged Webflow's CMS capabilities for easy content management and updates.",
      link: "https://www.dataropes.ai/scandinavian-biolabs",
    },
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
      title: "Stripe Payment Integration & Subscription Platform",
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
        "Learnify is a student-focused platform offering a wide range of IT courses, including web development, UI/UX design, data science, and much more. Designed for learners of all levels, the app allows users to easily browse, purchase, and engage with high-quality courses taught by industry experts. With a user-friendly interface and dynamic learning resources, Learnify empowers students to enhance their skills and advance their careers.",
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
      image: ageCalculatorImg,
      title: "Age Counter",
      description:
        "A React-based tool that calculates a user age in years, months, and days. Users input their birthdate, and the app validates the date before displaying the exact age. It uses React hooks for state management and react-hot-toast for error handling. Styled with Tailwind CSS, the app provides a clean and interactive interface, allowing users to track their age with ease.",
      link: "https://countmyage.vercel.app/",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px"
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

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="overflow-x-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-dark-bg">
          <div className="loader ease-linear"></div>
        </div>
      ) : (
        <>
          <header>
            <motion.a 
              href="/" 
              className="logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary">Naeem.</span>
              <span className="text-accent">Ashraf</span>
             {/* <span className="text-xs text-muted-text ml-2 font-mono">2025</span> */}
            </motion.a>
            
            <div
              className="bx bx-menu text-2xl"
              id="menu-icon"
              onClick={toggleMenu}
            ></div>
            
            <ul className={`navbar ${isMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#home" className={activeSection === "home" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </header>

          {/* HOME */}
          <section className="home" id="home">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-1"></div>
            <div className="bg-blur bg-blur-2"></div>
            
            <motion.div 
              className="social"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.a href="https://github.com/NP5555" target="_blank" rel="noreferrer" variants={fadeIn}>
                <FiGithub />
              </motion.a>
              <motion.a href="https://medium.com/@ngs.naeemashraf" target="_blank" rel="noreferrer" variants={fadeIn}>
                <SiMedium />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/naeem-ashraf-242663190/" target="_blank" rel="noreferrer" variants={fadeIn}>
                <FiLinkedin />
              </motion.a>
              <motion.a href="https://www.upwork.com/" target="_blank" rel="noreferrer" variants={fadeIn}>
                <SiUpwork />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="home-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>Hello, I'm</span>
              <h1>Naeem Ashraf</h1>
              <h2>Blockchain Developer & Full Stack Engineer</h2>
                              <p className="about-text-expanded">
                  I'm a Full-Stack & Blockchain Developer with expertise in building decentralized applications, smart contracts, and modern web platforms. My work is centered around creating secure, scalable, and user-friendly digital solutions. With a strong foundation in web technologies and blockchain frameworks, I strive to deliver innovative products that combine performance, reliability, and seamless user experience.
                </p>
              <div className="flex gap-4 mt-6">
              <a
                href={cv}
                target="_blank"
                rel="noreferrer"
                download="NaeemAshraf-Resume.pdf"
                  className="btn"
              >
                Download Resume
              </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
            </div>
            </motion.div>
            
            <motion.div 
              className="home-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src={MyImg} 
                  alt="Naeem Ashraf"
                loading="eager" 
                className="enhanced-image"
                />
            </motion.div>
          </section>

          {/* ABOUT & SKILLS COMBINED */}
          <AboutSkills />

          {/* PROJECTS */}
          <section className="projects" id="projects">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-1"></div>
            
            <motion.div 
              className="heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>Projects</span>
              <h2>Some of my work</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} project={project} />
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="contact" id="contact">
            <div className="bg-grid"></div>
            <div className="bg-blur bg-blur-2"></div>
            
            <motion.div 
              className="heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>Contact</span>
              <h2>Connect With Me</h2>
            </motion.div>
            
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form action="https://api.web3forms.com/submit" method="POST">
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                
                <div className="input-group">
                <input
                  type="text"
                  name="name"
                    placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="btn w-full sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>

          {/* FOOTER */}
          <div className="copyright">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              © 2025 Naeem Ashraf. All Rights Reserved
              <a href="https://github.com/NP5555" target="_blank" rel="noreferrer">
                <FiGithub className="text-xl" />
              </a>
            </motion.p>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;