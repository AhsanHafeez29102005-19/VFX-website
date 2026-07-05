import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Services from '../pages/services';
import ServiceDetail from '../pages/ServiceDetail';
import Portfolio from '../pages/Portfolio';
import About from '../pages/about';
import Contact from '../pages/Contact';
import Quote from '../pages/quote';
import HowItWorks from '../pages/HowItWorks';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
};

export default AppRoutes;
