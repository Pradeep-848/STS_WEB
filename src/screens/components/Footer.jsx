import '../styles/Footer.css';
import Logo from '../res/images/Profile.jpeg'; 
import Instagram from '../res/images/instagram.png';
import Facebook from '../res/images/facebook.png';
import Youtube from '../res/images/youtube.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-box">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <p className="footer-tagline">Shanmuga Mahal A/C</p>
        </div>

        <div className="footer-address">
          <h4>SF. No. 277-A, Palani Road Kolarpatti, Pollachi, Tamil Nadu 642107, +91 94422 25433</h4>
        </div>

        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img className='footer-icon' src={Instagram} alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">          
            <img className='footer-icon' src={Facebook} alt="Facebook" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">          
            <img className='footer-icon' src={Youtube} alt="YouTube" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <h4>© 2025 Shanmuga Mahal A/C. All rights reserved.</h4>
      </div>
    </footer>
  );
}
