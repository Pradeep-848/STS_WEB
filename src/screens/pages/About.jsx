import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';

import AboutImg1 from '../res/images/pavillion/1.jpg';
import AboutImg2 from '../res/images/pavillion/6.jpg';

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">OUR STORY</h2>

      {/* Section 1 - Left Image */}
      <motion.div className="about-section" initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ once: true }} >
        <img src={AboutImg1} alt="About Us 1" className="about-image" />
        <div className="about-content">
          <h4>Elegance in Every Detail</h4>
          <p> Our pavilion stands as a symbol of beauty, tradition, and celebration. From humble beginnings, we have grown into a destination for unforgettable weddings and events. </p>
        </div>
      </motion.div>

      {/* Section 2 - Right Image */}
      <motion.div className="about-section reverse" initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ once: true }} >
        <img src={AboutImg2} alt="About Us 2" className="about-image" />
        <div className="about-content">
          <h4>Passion Meets Perfection</h4>
          <p> Our team is dedicated to crafting perfect moments. With curated decor, flawless service, and a heartfelt approach, we turn your dream celebration into reality. </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
