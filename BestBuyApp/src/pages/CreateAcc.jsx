import React, { useContext, useState } from 'react'
import styles from "../styles/createAcc.module.css"
import {Box,Heading,Text,Button} from "@chakra-ui/react"
import {Link, Navigate, useNavigate} from "react-router-dom"
import {
    FormControl,
    FormLabel,
    Input,
    HStack,
    VStack,
    Switch
  } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContextPro'
import { HrLine } from '../Components/side-components/HrLine'
import AccountNav from '../Components/side-components/AccountNav'
import AccFooter from '../Components/side-components/AccFooter'

const CreateAcc = () => {

   const navigate = useNavigate()
   const {createAccDetail,setCreateAccDetail,showPass,handleSwitch} = useContext(AuthContext)
   const[load,setload] = useState(false)

  console.log(createAccDetail);
  async function handleForm(e){
    setload(true)
    try {
      const {value,name} = e.target
      setCreateAccDetail({...createAccDetail, [name] : value})
    } catch (error) {
      
    }finally{
      setload(false)
    }
  }
  

  return (
    <div style={{backgroundColor:"#f0f2f4"}}>
     <AccountNav/>
      {/* Actual Form */}
      <Box p="2em" w="25vmax" margin="auto" marginTop="2em" borderWidth="2px" h="40vmax"  bg="white">
      <form onSubmit={(e)=>{
        e.preventDefault()
        alert(createAccDetail.email != "" && createAccDetail.password != "" && createAccDetail.firstName != "" ? "Account created successfully ✨ Please Sign In." : "Please enter valid details !")
        navigate(createAccDetail.email && createAccDetail.password != "" && "/signIn" )
        e.target.value=""
        
        }}>
      <FormControl mb={"1em"}>
            <Heading mb="1em" as='h6' size="md" textAlign="center" >Create an Account</Heading>
            <VStack spacing={6} className={styles.inputs}>

               <Input 
               name="firstName"
               size="lg" 
               type='text' 
               focusBorderColor='black' 
               placeholder='Frist Name'
               onChange={handleForm} />

               <Input 
               name="lastName"
               size="lg" 
               type='text' 
               focusBorderColor='black' 
               placeholder='Last Name' 
               onChange={handleForm} />

               <Input size="lg" 
               name="email"
               type='email' 
               focusBorderColor='black' 
               placeholder='Email Address' 
               onChange={handleForm} />

               <Box display="flex" justifyContent="flex-end">
               <FormLabel htmlFor='email-alerts' mb='0'>
                  Show Password
               </FormLabel>
               <Switch id='email-alerts' onChange={handleSwitch} />
               </Box>

               <Input 
               name="password"
               size="lg" 
               type={showPass ? "password" : "text"} 
               focusBorderColor='black' 
               placeholder='Password'
               onChange={handleForm}  />


               <Input 
               name="number"
               ize="lg" 
               type='number' 
               focusBorderColor='black' 
               placeholder='Mobile Phone Number'
               onChange={handleForm}  />

               <Button 
               type="submit"
               bg="#0046be" 
               color="white"
               _hover={{ backgroundColor: '#023e8a', color: 'white' }}
               isLoading={load} 
               w="100%">Create Account</Button>
            </VStack>  
        </FormControl>

      </form>

        <Box display={"flex"} flexDirection={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
          <Box w="40%">
          <HrLine bgColor={"#adb5bd"} height={"1px"}/>
          </Box>
          <Box>or</Box>
          <Box w="40%">
          <HrLine bgColor={"#adb5bd"} height={"1px"}/>
          </Box>
        </Box>
        <HStack m={"1em"} >
          <Text fontWeight="light" fontSize="xs">Already have an Account?</Text>
          <Text fontWeight="light" fontSize="xs" color={"#0046be"} _hover={{textDecorationLine:"underline"}}>
            <Link to="/signIn">Sign in</Link>
          </Text>
        </HStack>
      </Box>
      
      <AccFooter />
    </div>
  )
}

export default CreateAcc;
