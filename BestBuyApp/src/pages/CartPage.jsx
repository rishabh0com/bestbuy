import React, { useContext } from 'react'
import Navbar from '../Components/main-components/Navbar';
import {Box,Text,VStack,HStack} from "@chakra-ui/react"
import { AuthContext } from '../Context/AuthContextPro';
import CartItemProduct from '../Components/main-components/CartItemProduct';

const CartPage = () => {

    const {cartItem} = useContext(AuthContext)

  return (
    <>
          <Navbar/>
          
    
        <Box display="flex" justifyContent="space-evenly" bg="#f0f2f4" height="110vh" p="2em" border="2px solid red">
            
            <Box w="67%" overflow="scroll" border="0px solid green" p="2em">
            <Box textAlign="center" p=".5em" h="3em" borderTop="1px solid grey" borderBottom="1px solid grey" mb="1em">{cartItem.length} items</Box>


             {cartItem.map((item,index)=>(
                <Box key={index}>
                   <CartItemProduct
                   src={item.images[0]}
                   title={item.title}
                   price={item.price}
                   wasPrice={item.wasPrice} />

                </Box>
             ))}
             
            </Box>

            <Box width="27%" bg="white">

            </Box>

        </Box>

        
      
    </>
  )
}

export default CartPage;
