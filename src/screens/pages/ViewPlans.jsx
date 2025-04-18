import React, { useState } from 'react';
import '../styles/ViewPlans.css';
import { FaStar, FaPlus, FaMinus } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Wedding from '../res/images/reception.jpg';
import Reception from '../res/images/pavillion/3.jpg';
import Private from '../res/images/earpiercings.jpg';

const plansData = [
  {
    id: '1',
    title: 'Wedding Events',
    image: Wedding,
    rating: 4.9,
    cost: 5000,
    description: 'A perfect setup for your dream wedding.',
  },
  {
    id: '2',
    title: 'Reception Events',
    image: Reception,
    rating: 4.7,
    cost: 3500,
    description: 'Celebrate your union in style.',
  },
  {
    id: '3',
    title: 'Private Events',
    image: Private,
    rating: 4.8,
    cost: 2500,
    description: 'Elegant settings for private moments.',
  },
];

const ViewPlans = () => {
  const [modal, setModal] = useState(null);
  const [seating, setSeating] = useState(50);

  const handleSelect = (plan) => {
    setModal(plan);
    setSeating(50);
  };

  const closeModal = () => setModal(null);

  const calculateCost = (base) => ((seating / 50) * base).toFixed(0);

  return (
    <div className="viewplans-container">
      <h2 className="vp-heading">Our Wedding Plans</h2>

      <div className="vp-grid">
        {plansData.map((plan, idx) => (
          <motion.div key={plan.id} className="vp-card" whileHover={{ scale: 1.03 }} onClick={() => handleSelect(plan)} >
            <img src={plan.image} alt={plan.title} />
            <div className="vp-info">
              <div className="vp-top">
                <FaStar className="star" />
                <span>{plan.rating}</span>
              </div>
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <div className="vp-cost">₹ {plan.cost}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="vp-modal-overlay" onClick={closeModal}>
          <motion.div className="vp-modal" onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} >
            <h3>{modal.title}</h3>
            <img src={modal.image} alt={modal.title} />
            <p>{modal.description}</p>

            <div className="seating-control">
              <FaMinus onClick={() => setSeating(Math.max(10, seating - 10))} />
              <span>{seating} Seats</span>
              <FaPlus onClick={() => setSeating(seating + 10)} />
            </div>

            <h4>Total: ₹ {calculateCost(modal.cost)}</h4>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ViewPlans;
