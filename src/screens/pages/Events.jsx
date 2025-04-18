import React from 'react';
import '../styles/Events.css';
import { motion } from 'framer-motion';

import EventImg1 from '../res/images/welcome.jpg';
import EventImg2 from '../res/images/reception.jpg';
import EventImg3 from '../res/images/earpiercings.jpg';

const slideFade = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } },
};

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">OUR EVENTS</h2>

      {/* Section 1 */}
      <motion.div className="event-wrapper" style={{ '--bg-image': `url(${EventImg1})` }} 
      initial="hidden" whileInView="visible" variants={slideFade} viewport={{ once: true }} >
        <div className="event-inner">
          <div className="event-image-box">
            <img src={EventImg1} alt="Reception Event" />
          </div>
          <div className="event-text-box">
            <h4 style={{textAlign: 'center'}}>WEDDING EVENTS</h4>
            <p> Step into elegance with our grand reception setups. We offer customized themes, lavish decorations, and flawless execution to match your dream celebration. </p>
          </div>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div className="event-wrapper" style={{ '--bg-image': `url(${EventImg2})` }}
        initial="hidden" whileInView="visible" variants={slideFade} transition={{ delay: 0.2 }} viewport={{ once: true }} >
        <div className="event-inner reverse">
          <div className="event-image-box">
            <img src={EventImg2} alt="Private Event" />
          </div>
          <div className="event-text-box">
            <h4 style={{textAlign: 'center'}}>RECEPTION EVENTS</h4>
            <p> Step into elegance with our grand reception setups. We offer customized themes, lavish decorations, and flawless execution to match your dream celebration.            </p>
          </div>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div className="event-wrapper" style={{ '--bg-image': `url(${EventImg3})` }}
        initial="hidden" whileInView="visible" variants={slideFade} viewport={{ once: true }} >
        <div className="event-inner">
          <div className="event-image-box">
            <img src={EventImg1} alt="Reception Event" />
          </div>
          <div className="event-text-box">
            <h4 style={{textAlign: 'center'}}>PRIVATE & CULTURAL EVENTS</h4>
            <p> Whether it’s a private gathering or a cultural ritual, our versatile venue adapts to your needs. We provide a warm and intimate setting with professional service. </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
