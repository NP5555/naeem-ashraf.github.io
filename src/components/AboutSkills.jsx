import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiPhone, FiMail, FiBriefcase } from "react-icons/fi";
import { SiPostman, SiAmazonwebservices, SiSupabase, SiPostgresql, SiNextdotjs, SiGithub, SiFigma, SiSass, SiTypescript } from "react-icons/si";

const AboutSkills = () => {
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
    <section className="about-skills-combined" id="about">
      <div className="bg-grid"></div>
      <div className="bg-blur bg-blur-2"></div>
      
      <div className="combined-sections-container">
        {/* ABOUT SECTION */}
        <div className="combined-section" id="about-section">
          <motion.div 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>About Me</span>
            <h2>Introduction</h2>
          </motion.div>
          
          <div className="about-container">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p>
                I'm a Full-Stack & Blockchain Developer with hands-on experience delivering scalable, secure, and user-focused solutions. Over the years, I've provided development services to multiple companies, collaborated actively on GitHub projects, and successfully completed 20+ deployments across platforms like Render, Hostinger, and Netlify.
<br></br>
                My expertise spans building and developing modern web platforms that emphasize performance, security, and seamless user experience. I thrive on solving complex problems, optimizing workflows, and contributing to innovative projects that make an impact.
              </p>
              
              <motion.div 
                className="information"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                                <motion.div className="info-box" variants={fadeIn}>
                  <FiBriefcase className="text-primary text-xl" />
                  <span>
                     Senior Full Stack Developer at <a href="https://vulcantech.co" target="_blank" rel="noreferrer">Vulcantech.co</a>
                  </span>
                </motion.div>

                <motion.div className="info-box" variants={fadeIn}>
                  <FiUser className="text-primary text-xl" />
                  <span> Muhammad Naeem Ashraf</span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiPhone className="text-primary text-xl" />
                  <span> +92-303-3288667</span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiMail className="text-primary text-xl" /> 
                  <span>
                    <a href="mailto:naeemashrafpansota@gmail.com">
                       ngs.naeemashraf@gmail.com
                    </a>
                  </span>
                </motion.div>
                
                <motion.div className="info-box" variants={fadeIn}>
                  <FiBriefcase className="text-primary text-xl" />
                  <span>
                    Senior Full Stack Developer at <a href="https://vulcantech.co" target="_blank" rel="noreferrer">Vulcantech.co</a>
                  </span>
                </motion.div>
              </motion.div>
              
              <a
                href="https://github.com/NP5555"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                More About Me
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* SKILLS SECTION */}
        <div className="combined-section" id="skills">
          <motion.div 
            className="heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>Skills</span>
            <h2>My Technical Expertise</h2>
          </motion.div>
          
          <div className="skills-container">
            <div className="bars">
              <motion.div 
                className="skills-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-html5"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-javascript"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxl-react"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiNextdotjs />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bx-code-block"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bx-link"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiPostman />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiAmazonwebservices />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiSupabase />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiPostgresql />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bxs-data"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <i className="bx bx-cloud"></i>
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiGithub />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiFigma />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiSass />
                  </div>
                </motion.div>
                
                <motion.div className="bars-box compact" variants={fadeIn}>
                  <div className="skill-icon">
                    <SiTypescript />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;
