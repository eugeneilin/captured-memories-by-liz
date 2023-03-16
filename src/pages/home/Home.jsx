import React from 'react';
import Navbar from '../../components/website/navbar/Navbar';
import Footer from '../../components/website/footer/Footer';
import FeaturedGallery from '../../components/website/featuredGallery/FeaturedGallery';
import About from '../../components/website/about/About.jsx';
import './home.css';

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <FeaturedGallery />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
