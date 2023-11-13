import React from 'react'
import {Box,Image,Text} from "@chakra-ui/react"


const Product01Box = ({title,price,savePrice,wasPrice,discount,src}) => {
  return (
    <>

    <Box border='2px solid black' h="23em" w="23em" >
      <Box>
      <Image
      src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6531/6531070cv38d.jpg;maxHeight=240;maxWidth=240'
      />
      </Box>
      <Text>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, dolore.
      </Text>
      <Box>
        $199.99
      </Box>
      <Box>
        +Save
      </Box>
      
    </Box>

    </>
  )
}

export default Product01Box;
