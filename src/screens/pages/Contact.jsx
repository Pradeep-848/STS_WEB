import React from 'react';
import '../styles/Contact.css';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import MapComponent from '../MapComponent';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

function Contact() {
  return (
    <div className="contact-container">
      {/* MAP SECTION */}
      <motion.div className="map-section" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} >
      <MapComponent lat={10.640462} lng={77.087042} zoom={16} />
      </motion.div>

      {/* CONTACT INFO */}
      <motion.div className="contact-info" initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} >
        <h2>Contact Us</h2>
        <motion.div className="info-grid">
          {[{
            icon: <FaClock className="icon" />,
            title: 'Opening Hours',
            lines: ['Mon - Fri: 10 AM - 5:30 PM', 'Sat & Sun: 11 AM - 7 PM']
          }, {
            icon: <FaMapMarkerAlt className="icon" />,
            title: 'Address',
            lines: ['SF. No. 277-A, Palani Road Kolarpatti, Pollachi, Tamil Nadu 642107']
          }, {
            icon: <FaPhone className="icon" />,
            title: 'Phone',
            lines: ['+91 94422 25433']
          }].map((item, i) => (

            <motion.div className="info-box" key={i} custom={i + 1}
              initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} >
              {item.icon}
              <div>
                <strong>{item.title}</strong>
                {item.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </motion.div>
            
          ))}
        </motion.div>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div className="contact-form" initial="hidden"
        whileInView="visible" variants={fadeUp} viewport={{ once: true }} >
        <h4 style={{color: '#777777'}}>LET'S MAKE YOUR DREAM WEDDING INTO REALITY</h4>
        <form>
          <div className="form-grid">
            {[
              { label: 'Event Date', type: 'date', id: 'eventDate' },
              { label: 'Your Name', type: 'text', id: 'name' },
              { label: 'Time Slot', type: 'time', id: 'timeSlot' },
              { label: 'Your Email', type: 'email', id: 'email' },
              { label: 'Event Type', type: 'text', id: 'eventType' },
              { label: 'Your Contact', type: 'tel', id: 'contact' },
              { label: 'No. of Guests', type: 'number', id: 'guests' },
            ].map((input, index) => (
              <motion.div
                className="form-field"
                key={input.id}
                custom={index + 1}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <label htmlFor={input.id}>{input.label}</label>
                <input type={input.type} id={input.id} />
              </motion.div>
            ))}
          </div>

          <motion.div className="button-field" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }} >
            <button type="submit">Submit</button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
