import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import FeaturedGallery from '../../components/featuredGallery/FeaturedGallery';
import './home.css';

const Home = () => {
  return (
    <div id='home'>
      <Navbar />
      <FeaturedGallery />
      <Footer />
    </div>
  );
};

export default Home;
