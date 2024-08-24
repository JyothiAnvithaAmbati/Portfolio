import React from 'react';
import './Home.css'; 
import homeImage from './image.jpg'; 

const Home = () => (
  <section id="home" className="home-section">
    <div className="home-image">
      <img src={homeImage} alt="Home" />
    </div>
    <div className="home-text">
      <h1>Hi, I'm Jyothi Anvitha Ambati.</h1>
      <p>
        I am a passionate Software Engineer with expertise in web development, data engineering, and cloud computing. Holding a Master’s in Computer and Information Sciences from the University of Florida. At Frontier IT Solutions Inc., I enhance application functionality and integration through comprehensive involvement in the software lifecycle and rigorous quality assurance. Previously, as a Java Developer and Data Engineer at Cognizant, I improved system performance with Java frameworks like Spring and Hibernate, optimized database designs, managed data archival with cloud technologies, and developed ETL pipelines and interactive dashboards using Tableau/Power BI. I also contributed to continuous improvement through CI/CD pipelines.
      </p>
      <div className="contact-info">
        <a href="https://www.linkedin.com/in/jyothi-anvitha-ambati/" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-linkedin"></i>
          LinkedIn
        </a>
        <a href="mailto:your-ajanvitha27@gmail.com" className="contact-link">
          <i className="fas fa-envelope"></i>
          Email Me
        </a>
        <a href="tel:+18103372355" className="contact-link">
          <i className="fas fa-phone-alt"></i>
          Call Me
        </a>
      </div>
    </div>
  </section>
);

export default Home;
