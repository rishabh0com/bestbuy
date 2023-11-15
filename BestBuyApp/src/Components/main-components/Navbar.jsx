import React, { useState } from 'react'
import styles from "../../styles/Navbar.module.css"
 import { HrLine } from '../side-components/HrLine';
import addpic from "./addpic.jpg"
import {Button, Image,Text,Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"

 const Navbar = () => {

  const [showSignIn,setShowSignIn] = useState(true)

  function showCompo(){
    setShowSignIn(!showSignIn)
  }
    
  return (
    <>
  
    <div className="navContainer">
      <div className={styles.topNav}>
        <div>
          <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/02/BestBuyLogoReversedRGB.svg" alt="" />
        </div>
        <div>
        <i class="fa-solid fa-bars"></i>
        <p>Menu</p>
        </div>
        <div>
          <input type="text" placeholder="What can we help you find today?" />
          <button>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          <Image h={"40px"} src={addpic} />
          <p>Aiea</p>
        </div>
        <div>
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Cart</p>
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
          <div onClick={showCompo}
          className={styles.accountSection}>
            <div>
            <i class="fa-regular fa-user"></i>
            </div >
            Account
            <div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
            <div  style={{display : showSignIn ? "block" : "none"}}>
            <div className={styles.authpage}>
              <Text color={"black"} textAlign="center" fontWeight="lighter" marginTop="3em">
              My Best Buy® members get free shipping with no
              minimum purchase. Plus, exclusive offers and more.
              </Text>
              <Box className={styles.authBth}
               display="flex" flexDirection="column" p="2em">
                <Link to="/signIn">
                <Button h="2em" w="100%" border="1px solid #0046be"
                bg="#0046be" color="white"
                _hover={{backgroundColor:'#023e8a'}}
                mb={"1em"}>Sign In</Button>
                </Link>

                <Link to="/createAccount">
                <Button h="2em" w="100%"  border="1px solid #0046be"
                bg="white" color="#0046be" _hover={{backgroundColor:'#023e8a',color:"white"}}
               >Create Account</Button>
                </Link>
              </Box>
            </div> 
            <div className={styles.arrow}></div> 

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
