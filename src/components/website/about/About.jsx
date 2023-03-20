import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id='home-about' className='container'>
      <h2 className='section-title'>About Me</h2>
      <div>
        <div className='img'></div>
        <div className='paragraph'>
          <h4>Text ID #1</h4>
          <p id='text-id-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita consequuntur
            odit consectetur, repudiandae pariatur? Praesentium blanditiis aperiam quibusdam autem
            excepturi explicabo at ratione corrupti repellendus esse. Accusamus perspiciatis
            possimus dignissimos sapiente? Autem quisquam vero magni repellendus nihil voluptatum
            minima. Rerum ipsa tenetur unde sapiente, animi laborum distinctio quisquam molestias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
