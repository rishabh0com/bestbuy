import React, { useContext, useEffect, useState } from 'react'
import styles from "../../styles/Navbar.module.css"
 import { HrLine } from '../side-components/HrLine';
import addpic from "./addpic.jpg"
import {Button, Image,Text,Box, VStack, HStack} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { AuthContext } from '../../Context/AuthContextPro';

 const Navbar = () => {

  const [showSignIn,setShowSignIn] = useState(false)
  const [showMenu,setShowMenu] = useState(false)
  const {isAuth,createAccDetail,setCategory} = useContext(AuthContext)
  

  function showSignInCompo(){
    setShowSignIn(!showSignIn)
  }
  function showMenuCompo(){
    setShowMenu(!showMenu);
  }
    
  return (
    <>
            <div style={{display : showMenu ? "block" : "none"}}> 
               <div className={styles.authpageMenu}>
                  <Text fontSize="15px" mb="1em" fontWeight="light">shop by category</Text>
                  <hr />
                  <VStack m="1em" spacing="10px" color="#0046be" _hover={{cursor:"pointer"}}>
                    <Link to="/products">
                      <Text onClick={()=>{setCategory("phone")}} _hover={{textDecorationLine:"underline"}}>Phone</Text>
                    </Link>
                    <Link to="/products">
                      <Text onClick={()=>{setCategory("laptop")}} _hover={{textDecorationLine:"underline"}}>Laptop</Text>
                    </Link>
                    <Link to="/products">
                      <Text onClick={()=>{setCategory("camera")}} _hover={{textDecorationLine:"underline"}}>Camera</Text>
                    </Link>
                    <Link to="/products">
                      <Text onClick={()=>{setCategory("tv")}} _hover={{textDecorationLine:"underline"}}>TV</Text>
                    </Link>
                  </VStack>
                  <hr />
                  <Link to="/products">
                      <Text p="5px" onClick={()=>{setCategory("All Product")}} textAlign="center" _hover={{textDecorationLine:"underline"}}>All Products</Text>
                  </Link>
                  <hr />
                  
                  <HStack onClick={showMenuCompo}  m="1em" justifyContent="center" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
                    <Text fontWeight="light"><i class="fa-solid fa-xmark"></i></Text>
                    <Text fontWeight="light"> Close</Text>
                  </HStack>
                </div>
            </div>

  
    <div className="navContainer">
      <div className={styles.topNav}>
        <Link to="/">
        <div>
          <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/02/BestBuyLogoReversedRGB.svg" alt="" />
        </div>
        </Link>
        <Box onClick={showMenuCompo} _hover={{cursor:"pointer"}}>
            <i class="fa-solid fa-bars"></i>
            Menu
            <div style={{display : showMenu ? "block" : "none"}} className={styles.arrowMenu}></div> 
        </Box>
        <div>
          <input type="text" placeholder="What can we help you find today?" />
          <button>
          <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          <Image h={"35px"} src={addpic} />
          <p>NewYork</p>
        </div>

        <div onClick={()=>{isAuth ? null : alert("please Sign In  😊")}}>
          <Link to={isAuth ? "/cart" : "/"} >
          <HStack >
          <i class="fa-solid fa-cart-shopping"></i>
          <p>Cart</p>
          </HStack>
          </Link>
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
          <div onClick={showSignInCompo}
          className={styles.accountSection}>
            <div>
            <i class="fa-regular fa-user"></i>
            </div >
            {isAuth ? `Hii, ${createAccDetail.firstName}` : "Account"}
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
