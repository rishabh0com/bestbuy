import AccountNav from "../Components/side-components/AccountNav";
import{Box,
    FormControl,Input,VStack,
    HStack,Text,Heading,FormLabel,Switch,Button} from "@chakra-ui/react"
import { HrLine } from "../Components/side-components/HrLine";
import {Link,Navigate, useNavigate} from "react-router-dom"
import styles from "../styles/createAcc.module.css"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextPro";
import AccFooter from "../Components/side-components/AccFooter";

function SignIn(){

    const{showPass,handleSwitch} = useContext(AuthContext)
    const {signInDetail,setSignInDetail,createAccDetail,setIsAuth} = useContext(AuthContext)

    const navigate = useNavigate()

    function handleChange(e){
      const{value,name} = e.target
      setSignInDetail({...signInDetail, [name] : value})
      console.log(signInDetail)
    }

    function handleSubmit(e){
      e.preventDefault()
      createAccDetail.email === signInDetail.email && createAccDetail.password === signInDetail.password ? alert("you are signed In !") : alert("Please Enter Valid Email and Password")
      navigate(createAccDetail.email === signInDetail.email && createAccDetail.password === signInDetail.password && "/")
      createAccDetail.email === signInDetail.email && createAccDetail.password === signInDetail.password && setIsAuth(true)
    }

    return(
    <div style={{backgroundColor:"#f0f2f4"}}>
        <AccountNav />

              {/* Actual Form */}
        <Box p="2em" w="25vmax" margin="auto" marginTop="2em" borderWidth="2px" h="30vmax"  bg="white">

          <form onSubmit={handleSubmit}>

          <FormControl mb={"1em"}>
              <Heading mb="1em" as='h6' size="md" textAlign="center" >Sign In to Best Buy</Heading>
              <VStack spacing={6} className={styles.inputs}>
  
  
                 <Input size="lg" 
                 type='email' 
                 name="email"
                 focusBorderColor='black' 
                 placeholder='Email Address'
                 onChange={handleChange} />
  
                 <Box display="flex" justifyContent="flex-end">
                 <FormLabel htmlFor='email-alerts' mb='0'>
                    Show Password
                 </FormLabel>
                 <Switch id='email-alerts' onChange={handleSwitch} />
                 </Box>
  
                 <Input 
                 size="lg" 
                 name="password"
                 type={showPass ? "password" : "text"} 
                 focusBorderColor='black' 
                 placeholder='Password'
                 onChange={handleChange} />
  
  
                 <Button 
                 bg="#0046be"
                 type="submit"
                 color="white"
                 _hover={{ backgroundColor: '#023e8a', color: 'white' }}
                 isLoading={false} 
                 w="100%">Sign In</Button>
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
              <Text fontWeight="light" fontSize="xs">Don't have an account?</Text>
              <Text fontWeight="light" fontSize="xs" color={"#0046be"} _hover={{textDecorationLine:"underline"}}>
                <Link to="/createAccount"> Create an account</Link>
              </Text>
            </HStack>
        </Box>
      
        <AccFooter />
    </div>
    )
}

export default SignIn;