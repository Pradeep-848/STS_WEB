import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/Gallery.css';

import Pav1 from '../res/images/pavillion/1.jpg';
import Pav2 from '../res/images/pavillion/2.jpg';
import Pav3 from '../res/images/pavillion/3.jpg';
import Pav4 from '../res/images/pavillion/4.jpg';
import Pav5 from '../res/images/pavillion/5.jpg';
import Wed1 from '../res/images/photography/photography1.jpg';
import Wed2 from '../res/images/photography/photography2.jpeg';
import Ear from '../res/images/earpiercings.jpg';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openImage = (img) => setSelectedImg(img);
  const closeImage = () => setSelectedImg(null);

  return (
    <div className="gallery-container">

      <motion.div className="event-gallery" initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} >
        <h4 className="title">Pavillion</h4>

        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {[Pav1, Pav2, Pav3, Pav4, Pav5].map((img, index) => (
            <div key={index} onClick={() => openImage(img)}>
              <img src={img} alt={`Pavillion ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div className="event-gallery" initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} >
        <h4 className="title">Wedding Events</h4>

        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {[Wed1, Wed2].map((img, index) => (
            <div key={index} onClick={() => openImage(img)}>
              <img src={img} alt={`Wedding ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </motion.div>

      <motion.div className="event-gallery" initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} >
        <h4 className="title">Private Events</h4>
       
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
          {[Ear].map((img, index) => (
            <div key={index} onClick={() => openImage(img)}>
              <img src={img} alt={`Private ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </motion.div>

      {selectedImg && (
        <div className="lightbox" onClick={closeImage}>
          <img src={selectedImg} alt="Full View" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
