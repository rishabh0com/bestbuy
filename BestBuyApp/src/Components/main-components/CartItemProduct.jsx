import React from 'react'
import {Box,Text,VStack,HStack,Image,Select} from "@chakra-ui/react"

const CartItemProduct = ({src,price,wasPrice,title}) => {
  return (
    <>
      <div>
        <Box display="flex" borderWidth="1px" h="12em" p="2em" bg="white" mb="2em">
           <Box  h="2em" w="20%">
              <Image w="6em" maxWidth="100%" src={src}/>
           </Box>

           <Box w="50%" ml="1em" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
            <Text fontWeight="light" >{title}</Text>
           </Box>

           <Box w="15%" pl="2em">
            <Select color="black" _hover={{cursor:"pointer"}}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3'>4</option>
            </Select>
           </Box>

           <VStack w="20%" alignItems="flex-end" spacing="0px">
            <Text fontSize="15px">${price}</Text>
            <Box bg="rgb(187, 6, 40)" color="white" fontSize="12px" fontWeight="bold">Save $199</Box>
            <Text fontSize="12px" fontWeight="light">Was ${wasPrice}</Text>
           </VStack>

        </Box>
      </div>
    </>
  )
}

export default CartItemProduct;
