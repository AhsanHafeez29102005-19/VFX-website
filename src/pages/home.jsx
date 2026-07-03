import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import BeforeAfterGallery from '../components/sections/BeforeAfterGallery';
import StatsBar from '../components/sections/StatsBar';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BeforeAfterGallery />
      <StatsBar />
      <Testimonials />
      <CTASection />
    </>
  );
};

export default Home;
