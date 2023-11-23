import React from 'react'
import {Box , Text,HStack,VStack} from "@chakra-ui/react"

const Footer = () => {
  return (
    <div>
        <hr />
        <Box bg="#f0f2f4" h="20em" p="1em" >

            <HStack justify="space-around" alignItems="start" pt="2em">
               <Box>
                 <VStack  alignItems="start" >
                    <Text>Order & Purchases</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Check Order Status</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Shipping, Delivery & Pickup</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Returns & Exchanges</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Price Match Guarantee</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Product Recalls</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Trade-In Program</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Gift Cards</Text>
                 </VStack>
               </Box>
               <Box>
               <VStack alignItems="start">
                    <Text >Support & Services</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Visit our Support Center</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Shop with an Expert</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}> Schedule a Service</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Manage an Appointment</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Protection & Support Plans</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Haul Away & Recycling</Text>
                    <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Contact Us</Text>
                    
                 </VStack>

               </Box>
               <Box>
               <VStack alignItems="start">
                <Text>Partnerships</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Affiliate Program</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Advertise with Us</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Developers</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Best Buy Health</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Best Buy Education</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Best Buy Business</Text>
               </VStack>

               </Box>
               <Box>
               <VStack alignItems="start">
               <Text>Payment Options</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>My Best Buy® Credit Card</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Pay Your Bill at Citibank</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Lease to Own</Text>             
               </VStack>

               </Box>
               <Box>
               <VStack alignItems="start">
               <Text color="black">Rewards & Membership</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>My Best Buy Memberships</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>View Points & Certificates</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Member Offers</Text>             
                </VStack>

               </Box>
               <Box>
               <VStack alignItems="start">
               <Text>About Best Buy</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Corporate Information</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Careers</Text>
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Corporate Responsibility</Text>             
               <Text color="#0046be" fontSize="12px" fontWeight="light" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>Sustainability</Text>     
                </VStack>
               </Box>
            </HStack>
            
        </Box>

    </div>
  )
}

export default Footer;
