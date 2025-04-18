import React from 'react';
import '../styles/CateringMenu.css';
import { FaUtensils, FaCoffee, FaIceCream, FaLeaf, FaEgg } from 'react-icons/fa';

const menuItems = [
  {
    category: 'Breakfast',
    icon: <FaCoffee />,
    items: ['Idli', 'Vada', 'Pongal', 'Upma', 'Dosa', 'Poori Masala'],
  },
  {
    category: 'Main Course',
    icon: <FaUtensils />,
    items: ['Sambar Rice', 'Curd Rice', 'Lemon Rice', 'Tomato Rice', 'Bisi Bele Bath'],
  },
  {
    category: 'Sides',
    icon: <FaLeaf />,
    items: ['Potato Fry', 'Beans Poriyal', 'Cabbage Thoran', 'Avial', 'Kootu'],
  },
  {
    category: 'Desserts',
    icon: <FaIceCream />,
    items: ['Payasam', 'Kesari', 'Boondi Ladoo', 'Jangiri', 'Gulab Jamun'],
  },
  {
    category: 'Extras',
    icon: <FaEgg />,
    items: ['Pickles', 'Papad', 'Banana', 'Buttermilk', 'Coconut Chutney'],
  },
];

const CateringMenu = () => {
  return (
    <div className="catering-container">
      <h2 className="menu-title">Food Items</h2>
      <div className="menu-grid">
        {menuItems.map((group, idx) => (
          <div className="flip-card" key={idx}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <div className="menu-icon">{group.icon}</div>
                <h3>{group.category}</h3>
              </div>
              {/* Back */}
              <div className="flip-card-back">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CateringMenu;
