import React from 'react';
import styles from '../styles/Footer.module.css';
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.column}>
        <h3>Socials</h3>
        <div className={styles.socials}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>Instagram
          </a>
        </div>
      </div>
      <div className={styles.column}>
        <h3>Contact</h3>
        <div className={styles.contact}>
          <p>Email: animalgram@outlook.com</p>
          <p>Address: 123 Animal St, Pet City</p>
        </div>
      </div>
      <div className={styles.column}>
        <h3>AnimalGram Co</h3>
        <img 
        src={logo} 
        alt="Company Logo" 
        className={styles.logo} />
      </div>
    </div>
  );
}

export default Footer;
