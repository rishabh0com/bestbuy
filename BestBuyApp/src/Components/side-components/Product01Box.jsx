import React from 'react'
import axios from "axios"
import {Box,Button,Image,Icon,Text} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"
import styles from "../../styles/landingPage.module.css"



const Product01Box = ({title,price,savePrice,src}) => {

  

  return (
    <>
 
    <Box border='1px solid grey' borderRadius="3px" h="22em" w="22em" p='5'>
      <Box margin="auto" w="60%">
      <Image
      src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531070cv38d.jpg;maxHeight=240;maxWidth=240'
      />
      </Box>
      <Text marginTop="30px" fontSize=".8em" color="#0046be">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dolore.
      </Text>
      <Box marginTop="10px" fontSize="1.5em" fontWeight='700'>
        $199.99
      </Box>
      
      <Box 
      borderRadius="3px" mt='10px' mb="10px"
      borderWidth="1px" display="flex" p="5px"
       w="12em" alignItems="center" >
        <Text fontWeight="700" color='red' marginRight="3px" fontSize="11px">+Save $12.50</Text>
        <Text fontSize='11px'>with plus or Total </Text> 
        <ChevronRightIcon/>  
      </Box>
      <button
     className={styles.Buttonp}
      > <i class="fa-solid fa-cart-shopping"></i> Add to Cart </button>
      
    </Box>

    </>
  )
}

export default Product01Box;
