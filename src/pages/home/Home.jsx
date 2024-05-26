import React from "react";
import "./home.scss";
import logo from "../../assets/logo.svg";
import heroimg from "../../assets/hero.jpg"
import qualityFoodIcon from '../../assets/m1.png'; 
import foodDeliveryIcon from '../../assets/m2.png';
import superTasteIcon from '../../assets/m3.png';
import aboutUsImage from '../../assets/n1.png';
import Products from "../../components/products/Products.jsx";


const features = [
    {
        id: 1,
        title: "Quality Food",
        description: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: qualityFoodIcon
    },
    {
        id: 2,
        title: "Food Delivery",
        description: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: foodDeliveryIcon
    },
    {
        id: 3,
        title: "Super Taste",
        description: "It can be a very secure path to earn good money and make you very successful creative entrepreneur.",
        icon: superTasteIcon
    }
];

const Home = () => {
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
        <button className="booking-btn">Booking Now</button>
      </nav>
      <section className="hero-section container">
        <div className="text-content">
          <h1>Making time a good time by making food the good food.</h1>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment.
          </p>
          <div className="buttons">
            <button className="order-now">Order Now</button>
            <button className="food-details">Food Details</button>
          </div>
        </div>
        <div className="image-content">
          <img src={heroimg} alt="Food flying out of a pan" />
        </div>
      </section>
      <section className="features-section">
            <h2 className="features-title">FEATURES</h2>
            <h3 className="features-subtitle">Food With A New Passion</h3>
            <div className="features-content">
                {features.map(feature => (
                    <div key={feature.id} className="feature-item">
                        <img src={feature.icon} alt={feature.title} className="feature-icon" />
                        <h4 className="feature-title">{feature.title}</h4>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className="about-us-section container">
            <div className="image-content">
                <img src={aboutUsImage} alt="Smiling woman with salad" />
            </div>
            <div className="text-content">
                <h2 className="section-title">ABOUT US</h2>
                <h3 className="section-subtitle">Food Stalls with Persons but to Product marketing plane catlogues etc to.</h3>
                <p className="section-description">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment make your marketing plane Effective.</p>
                <button className="read-more-button">Read More</button>
            </div>
        </section>
        <Products  />
    </header>
  );
};

export default Home;
