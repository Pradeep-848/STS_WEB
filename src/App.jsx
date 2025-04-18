import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/components/Navbar';
import Footer from './screens/components/Footer';

import Home from './screens/pages/Home';
import Events from './screens/pages/Events';
import CateringMenu from './screens/pages/CateringMenu';
import ViewPlans from './screens/pages/ViewPlans';
import Gallery from './screens/pages/Gallery';
import Contact from './screens/pages/Contact';
import About from './screens/pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<CateringMenu />} />
        <Route path="/plans" element={<ViewPlans />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
