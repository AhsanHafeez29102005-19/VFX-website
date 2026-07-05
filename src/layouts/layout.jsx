import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
