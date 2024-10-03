import React from 'react';
import '../styles/VirtualTour.css';
import chanderiImage from '../assets/chanderi.jpeg'; // Example paths, update according to your file structure
import ikatImage from '../assets/ikat.jpg';
import khadiImage from '../assets/khadi.jpg';

const VirtualTour = () => {
  return (
    <div className="virtual-tour">
      <section className="intro">
        <h1>Welcome to the Handloom Virtual Tour</h1>
        <p>Discover the beauty and heritage of handloom products, and explore the stories behind the craft.</p>
      </section>

      <section className="what-is-handloom">
        <h2>What is Handloom?</h2>
        <p>
          Handloom refers to the technique of weaving fabrics using traditional methods, typically by hand. 
          It has been practiced for centuries and continues to be a symbol of cultural heritage and craftsmanship 
          in many regions around the world. The fabrics created are not only aesthetically beautiful but are also 
          unique, sustainable, and environmentally friendly.
        </p>
      </section>

      <section className="types-of-handloom">
        <h2>Types of Handloom</h2>
        <div className="handloom-types">
          <div className="handloom-item">
            <img src={khadiImage} alt="Khadi Handloom" className="handloom-image"/>
            <h3>Khadi</h3>
            <p>Khadi is a type of hand-woven cloth known for its breathability and durability.</p>
          </div>
          <div className="handloom-item">
            <img src={chanderiImage} alt="Chanderi Handloom" className="handloom-image"/>
            <h3>Chanderi</h3>
            <p>Chanderi is famous for its sheer texture, light weight, and glossy transparency.</p>
          </div>
          <div className="handloom-item">
            <img src={ikatImage} alt="Ikat Handloom" className="handloom-image"/>
            <h3>Ikat</h3>
            <p>Ikat involves dyeing yarns before weaving, creating intricate patterns.</p>
          </div>
        </div>
      </section>

      <section className="about-artists">
        <h2>Meet the Artisans</h2>
        <div className="artist-profile">
          <h3>Ravi Sharma</h3>
          <p>
            Ravi comes from a long line of weavers in Gujarat. His family has passed down the tradition for 
            generations, specializing in making beautiful Patola sarees.
          </p>
        </div>
        <div className="artist-profile">
          <h3>Anita Devi</h3>
          <p>
            Anita is a skilled weaver from West Bengal, known for her intricate Jamdani designs. 
            Her work reflects the delicate balance of tradition and modernity.
          </p>
        </div>
      </section>

      <section className="handloom-daily-life">
        <h2>Handloom in Daily Life</h2>
        <p>
          Handloom products are not just artistic creations; they are practical and versatile. From sarees to scarves, 
          curtains to cushion covers, handloom textiles are used in various aspects of daily life across the world.
        </p>
      </section>

      <div className="explore-more">
        <a href="/catalog">
          <button>Explore Handloom Products</button>
        </a>
      </div>
    </div>
  );
};

export default VirtualTour;
