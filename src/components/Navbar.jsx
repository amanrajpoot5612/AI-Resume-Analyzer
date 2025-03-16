import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
       <h2 className={styles.logo}>CV-Elite</h2>
       <ul className={styles.navList}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/results" className={styles.link}>Results</Link></li>
        <li><Link to="/resume-builder" className={styles.link}>Resume Builder</Link></li>
        <li><Link to="/cover-letter-generator" className={styles.link}>Cover Letter Generator</Link></li>
        <li><Link to="/job-matching" className={styles.link}>Job Matching</Link></li>
        <li><Link to="/skills-analyzer" className={styles.link}>Skills Analyzer</Link></li>
        <li><Link to="/resume-tips" className={styles.link}>Tips</Link></li>
        <li><Link to="/community" className={styles.link}>Community</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact Us</Link></li>
</ul>

    </nav>
  );
}

export default Navbar;
