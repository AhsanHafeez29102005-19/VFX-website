import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Services from '../pages/services';
import Portfolio from '../pages/Portfolio';
import About from '../pages/about';
import Contact from '../pages/Contact';
import Quote from '../pages/quote';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
};

export default AppRoutes;