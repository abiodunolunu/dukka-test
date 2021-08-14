import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={styles.header}>
      <nav className="container">
        <div className={styles["menu-icon"]} onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.brand}>
          <p>Samasys</p>
          <small>combat salary fraud</small>
        </div>

        <ul className={`${styles["nav-list"]} " " ${navOpen ? styles["nav-open"] : ""}`}>
          <li onClick={toggleNav}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleNav}>
            <Link to="/add-employee">Add Employee</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
