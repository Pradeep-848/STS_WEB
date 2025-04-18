import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import '../styles/Home.css';
import Img1 from '../res/images/photography/photography1.jpg';
import Img2 from '../res/images/reception.jpg';
import Img3 from '../res/images/earpiercings.jpg';
import MapComponent from '../MapComponent';

// Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
//   }),
// };

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const events = [
    {
      title: 'Wedding Events',
      content: [
        'Professional ambiance with state-of-the-art facilities.',
        'Ideal for meetings, seminars, and conferences.',
        'Tailored services for your brand’s image.'
      ],
      img: Img1,
    },
    {
      title: 'Reception Events',
      content: [
        'Celebrate your special moments in style.',
        'Lavish decor and gourmet catering.',
        'Customizable themes to match your dreams.'
      ],
      img: Img2,
    },
    {
      title: 'Private Events',
      content: [
        'Intimate settings for birthdays, anniversaries, and more.',
        'Dedicated spaces with privacy.',
        'Flexible arrangements for every occasion.'
      ],
      img: Img3,
    },
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <motion.section className="intro-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h5>ELEGANCE AND QUALITY</h5>
        <h1>WEDDING AND EVENTS VENUE</h1>
        <h3>Our opportunity to create and provide an exceptionally exciting and memorable day for you.</h3>
      </motion.section>

      {/* Event Cards Section */}
      <section className="event-cards">
        {events.map((event, index) => (
          <motion.div className="event-card" key={index} whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.5 }} viewport={{ once: true }} >

          <img src={event.img} alt={event.title} />

          <div className="event-card-content">
            <h3>{event.title}</h3>
            {event.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
            <Link to="/events" className="view-more">-- View More</Link>
          </div>
        </motion.div>  
        ))}
      </section>


      {/* Counter Section */}
      <motion.section className="counter-section" initial="hidden" whileInView="visible"
        variants={fadeUp} viewport={{ once: true }} >
        {[
          { end: 500, label: 'Happy Customers' },
          { end: 300, label: 'Organised Events' },
          { end: 1000, label: 'Working Days' },
        ].map((counter, index) => (
          <motion.div className="counter-box" key={index} variants={fadeUp} >

            <h2> <CountUp end={counter.end} duration={2} />+</h2>

            <p style={{color: 'white', fontWeight: 'bold'}}>{counter.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Team Section */}
      <motion.section className="team-section" initial="hidden"
        whileInView="visible" variants={fadeUp} viewport={{ once: true }} >
        <h5>OUR TEAM</h5>
        <h1>OUR CHEFS</h1>
        <h3>Our opportunity to create and provide an exceptionally exciting and memorable day for you.</h3>
        <Link to="/about" className="view-more">View More</Link>
      </motion.section>

      {/* YouTube */}
      <motion.section className="video-section" initial="hidden" whileInView="visible"
        variants={fadeUp} viewport={{ once: true }} >
          
        <iframe
          src="https://www.youtube.com/embed/9l85wirmZBw?rel=0"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div style={{marginTop: '2%'}}>
        <MapComponent lat={10.640462} lng={77.087042} zoom={16} />
        </div>
        </motion.section>
    </div>
  );
}
