import React from 'react'
import styles from "../../styles/createAcc.module.css"
import {Box,Heading,Text} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack
  } from '@chakra-ui/react'

const CreateAcc = () => {
  return (
    <div style={{backgroundColor:"#f0f2f4"}}>
      <Box h="4.3em" bg="#0046be" display="flex" justifyContent={'space-evenly'} alignItems="center">
        <Box h="4em" w="6em"  >
           <img src="https://corporate.bestbuy.com/wp-content/uploads/2021/02/BestBuyLogoReversedRGB.svg" alt="" />
        </Box>
        <Box w="15%"></Box>
        <Box>
            <Text fontWeight="500" fontSize="xs" color='white'
            >Return to previous page</Text>
        </Box>
      </Box>

      {/* Actual Form */}
      <Box p="2em" w="27%" margin="auto" marginTop="2em" borderWidth="2px" h="50em"  bg="white">
        <FormControl>
            <Heading mb="1em" as='h6' size="md" textAlign="center" >Create an Account</Heading>
            <VStack spacing={6} className={styles.inputs}>
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Frist Name' />
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Last Name' />
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Email Address' />
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Password' />
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Confirm Password' />
               <Input size="lg" type='email' focusBorderColor='black' placeholder='Mobile Phone Number' />
            </VStack> 
            
        </FormControl>
      </Box>

      {/* footer */}
      <Box h="7.5em" bg="white" marginTop="4em" display="flex" alignItems="center">
        <hr />
        <Box p="1em" border="0px solid black" fontSize="xs" width="70%" m="auto" h="80%">
           <Box display="flex" >
            <Text color="#0046be" fontWeight="light"   >Terms and Conditions </Text>
             <Box marginLeft="6px" marginRight="6px" color="grey"> |</Box>
            <Text color="#0046be" fontWeight="light" >Privacy</Text>
             <Box  marginLeft="6px" marginRight="6px" color="grey">|</Box>
            <Text color="#0046be" fontWeight="light" >Interest-Based Ads</Text>
           </Box>

           <Text color="#0046be" fontWeight="light" marginTop=".5em" marginBottom=".5em">Mobile Site</Text>
           <Text fontWeight="light">
            Prices and offers are subject to change. © 2023 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the Tag Design, MY BEST BUY, and BESTBUY.COM are trademarks of Best Buy and its affiliated companies. 
           </Text>
        </Box>
      </Box>
    </div>
  )
}

export default CreateAcc;
