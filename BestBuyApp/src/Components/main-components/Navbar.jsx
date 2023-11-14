import React, { useState } from 'react'
import styles from "../../styles/Navbar.module.css"
 import { HrLine } from '../side-components/HrLine';
import addpic from "./addpic.jpg"

 const Navbar = () => {
    
  return (
    <>
  
    <div className="navContainer">
      <img src={addpic} alt="srcImage" />
      <div className={styles.topNav}>
        <div>
          <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/02/BestBuyLogoReversedRGB.svg" alt="" />
        </div>
        <div>
        <i class="fa-solid fa-bars"></i>
        <p>Menu</p>
        </div>
        <div>
          <input type="text" />
          <button>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          <img src="addpic.jpg" alt="l" />
          Aiea
        </div>
        <div>
        <i class="fa-solid fa-cart-shopping"></i>
        Cart
        </div>
      </div>
      <HrLine bgColor="#0096c7" height="1px"/>
      <div className={styles.bottomNav}>
        <div className={styles.bottomLeft}>
          <p>Black Friday deal</p>
          <p>Top Deals</p>
          <p>Deal of the Day</p>
          <p>My Best Buy Membership</p>
          <div>More
            <div>
            <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div>
            <div>
            <i class="fa-regular fa-user"></i>
            </div>
            Account
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div>
            Recently Viewed
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div>
            Order Status
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <div>
            Saved Item
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;
