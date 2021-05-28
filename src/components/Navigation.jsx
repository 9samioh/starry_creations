import React from 'react';
// import { Text, View } from 'react-native';
import { Link, withRouter } from "react-router-dom";
import styles from '../styles/Navigation.module.css';

function Navigation(props) {
  return (
    <div className={styles.navigation}>
      <nav class={styles.navbar}>
        <div class={styles.navLeft}>
          <img
            class={styles.logo}
            src="/images/logo.png"
            alt=""
          />
        </div>
        <div class={styles.navRight}>
          <Link class={styles.item} to="/">
            HOME
          </Link>

          <Link class={styles.item} to="/">
            LOOKBOOK
          </Link>

          <Link class={styles.item} to="/about">
            ABOUT US 
          </Link>

          <Link class={styles.item} to="/contact">
            CONTACT
          </Link>

        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);