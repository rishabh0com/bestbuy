import React from 'react'
import axios from "axios"
import {Box,Button,Image,Icon,Text} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"
import styles from "../../styles/landingPage.module.css"



const Product01Box = ({title,price,src}) => {

  

  return (
    <>
 
    <Box border='1px solid grey' borderRadius="3px" h="22rem" w="22rem" p='5'>
      <Box margin="auto" w="7em" h="7em">
      <Image maxWidth="100%"
      src={src}
      />
      </Box >
      <Text  w="100%" h='4em' marginTop="30px" fontSize=".8em" color="#0046be">
        {title}
      </Text>
      <Box marginTop="10px" fontSize="1.5em" fontWeight='700'>
       ${price}
      </Box>
      
      <Box 
      borderRadius="3px" mt='10px' mb="10px"
      borderWidth="1px" display="flex" p="5px"
       w="12em" alignItems="center" >
        <Text fontWeight="700" color='red' marginRight="3px" fontSize="11px">+Save ${Math.floor((Math.random() * 900) + 100)}</Text>
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
