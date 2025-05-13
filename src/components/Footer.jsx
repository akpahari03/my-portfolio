import React from 'react';
import styles from './Footer.module.css';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>
          Designed & Built with <FaHeart className={styles.heart} /> by Ayush Kumar Pahari 
        </p>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;