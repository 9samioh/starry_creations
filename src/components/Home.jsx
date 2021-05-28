import React from "react";
import styles from '../styles/Home.module.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homepage}>
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
      <div className={styles.home}>
        <div class={styles.content}>
          <div class={styles.left}>
          <img
              class={styles.line}
              src="/images/linedetail.png"
              alt=""
          />
            <img
              class={styles.coverimg}
              src="/images/deeCover.jpg"
              alt=""
            />
          </div>
          <div class={styles.right}>
            <h1 class={styles.title}>1 OF 1</h1>
            <h1 class={styles.title}>SUSTAINABLE BAGS</h1>
            <p class={styles.description}>
              I’m dom and I am amazing at sewing bags :) I love to save scrap fabric and reuse old clothing to make eco-friendly handmade tote bags.
            </p>
            <div class={styles.buttonclass}>
              <Link class={styles.button} to="/">
                SHOP THE LOOK
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class={styles.colorblock}>
        <div class={styles.colorgreen}> 
          <img
              class={styles.line2}
              src="/images/linedetail2.png"
              alt=""
          />
          <br/><br/>
        </div>
        <br/><br/><br/>
      </div>

      <div class={styles.lookbook}>
        <br/>
        <h1 class={styles.collectiontitle}>RECENT COLLECTIONS</h1>
        <br/>
        <div class={styles.collections}>
          <div class={styles.collection}>
            <img
                class={styles.collectionimg}
                src="/images/deeCover.jpg"
                alt=""
            />
            <p class={styles.collectiondes}>
              Earth Day
            </p>
          </div>
          
          <div class={styles.collection}>
            <img
                class={styles.collectionimg}
                src="/images/deeCover.jpg"
                alt=""
            />
            <p class={styles.collectiondes}>
              Earth Day
            </p>
          </div>

          <div class={styles.collection}>
            <img
                class={styles.collectionimg}
                src="/images/deeCover.jpg"
                alt=""
            />
            <p class={styles.collectiondes}>
              Earth Day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;