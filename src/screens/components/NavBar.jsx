import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import Img1 from '../res/images/cateringmenu.jpg';
import Img2 from '../res/images/pavillion/3.jpg';
import Img3 from '../res/images/pavillion/2.jpg';
import Img4 from '../res/images/pavillion/6.jpg';
import Img5 from '../res/images/photography/photography1.jpg';
import Img6 from '../res/images/pavillion/1.jpg';
import Img7 from '../res/images/pavillion/1.jpg';
import Profile from '../res/images/Profile.jpeg';
import { useEffect, useState } from 'react';
import Loader from '../Loader';

export default function Navbar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/about':
        return 'ABOUT US';
      case '/events':
        return 'EVENTS';
      case '/menu':
        return 'CATERING MENU';
      case '/':
        return 'YOUR DREAM EVENT';
      case '/plans':
        return 'BOOK YOUR PLANS';
      case '/gallery':
        return 'GALLERY';
      case '/contact':
        return 'CONTACT US';
      default:
        return '';
    }
  };
  
  const pageTitle = getTitle();  

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about':
        return Img1;
      case '/events':
        return Img2;
      case '/menu':
        return Img3;
      case '/':
        return Img4;
      case '/plans':
        return Img5;
      case '/gallery':
        return Img6;
      case '/contact':
        return Img7;
      default:
        return null;
    }
  };

  const backgroundImage = getBackgroundImage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
    <div
      className="navbar-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px', 
      }}
    >
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/events">EVENTS</Link>
          <Link to="/menu">CATERING MENU</Link>
          <Link to="/">
            <img src={Profile} alt="Home" className="nav-logo" />
          </Link>
          <Link to="/plans">VIEW PLANS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
      {pageTitle && <h1 className="navbar-title">✧ {pageTitle} ✧</h1>}
    </div>
    )}
    </>
  );
}