import React from 'react'
import Navbar from '../../Components/main-components/Navbar';
import styles from "../../styles/allProductPage.module.css"
import {Box,Text,Image,HStack,Button} from "@chakra-ui/react"


const AllProductPage = () => {
  return (
    <>
      <div>
        <Navbar />

        <Box mt="2em">
            <hr />
        </Box>

        <Box display="flex" p="4em" justifyContent="space-between">
        <div className={styles.sideOption}>

        </div>
        
        <div className={styles.mainContainer}>
            <Box 
             pt="1em" pb="1em"
             borderBottom="1px solid  rgb(206, 204, 204)"
             borderTop="1px solid  rgb(206, 204, 204)"
             >
                555 items
            </Box>

             {/* product  */}
            <Box display="flex" borderBottom="1px solid rgb(206, 204, 204)" >
                <Box p="2em">
                   <Image
                   src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551176_sd.jpg;maxHeight=200;maxWidth=300'
                    />
                </Box>

                <Box pt="2.8em" fontSize="12px" >
                    <Text fontWeight="light" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
                    TCL - 40" Class S3 S-Class 1080p FHD HDR LED Smart TV with Fire TV
                    </Text>
                    <HStack pt="1em">
                        <Text>Model</Text> <Text>:</Text> <Text fontWeight="light">40S35F</Text>
                    </HStack >
    
                    <HStack pt="1em">
                        <Text>SKU</Text> <Text>:</Text> <Text fontWeight="light">89756</Text>
                    </HStack>
    
                    <HStack pt="1em" spacing="3px">
                        <Text>
                            <i class="fa-solid fa-location-dot"></i>
                        </Text> 
                        <Text  fontWeight="light">Pick up</Text>
                        <Text>today</Text>
                        <Text fontWeight="light">at</Text>
                        <Text fontWeight="light" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>NewYork</Text>
                    </HStack>
    
    
    
                    <Text pt="1em" display="flex" alignItems="center">
                    <i class="fa-solid fa-box-open"></i>
                    <Text ml="4px" fontWeight="light" >Shipping unavailable</Text>
                    <Text ml="4px" fontWeight="light" color="#0046be">978779</Text>
                    </Text>
    
                    <HStack pt="1em">
                        <HStack>
                            <Box _hover={{borderColor:"#0046eb"}} borderRadius="2px" h="18px" w="18px" border="2px solid rgb(206, 204, 204)" ></Box>
                          <Text fontWeight="light" color="#0046be" >Compare</Text>
                        </HStack>
                        <HStack>
                          <Text fontWeight="light" color="#0046be" ><i class="fa-regular fa-bookmark"></i></Text>
                          <Text fontWeight="light" color="#0046be" >Save</Text>
                        </HStack>
                    </HStack>
                </Box>

                <Box border="0px solid red " w="27%" m="2em">
                    <Text fontSize="25">$199.99</Text>
                    <HStack>
                        <Box bg="red" fontSize="13" fontWeight="bold" pl="4px" pr="4px"  h="20px" color="white">Save $80</Box>
                        <Text fontSize="12" fontWeight="light">Was $299.99</Text>
                    </HStack>
                    <Button w="100%" mt="0.7em" h="1.8em" bg="rgb(255, 224, 0)" _hover={{backgroundColor:"yellow"}}>
                        <Text fontSize="12" mr="1em"><i class="fa-solid fa-cart-shopping"></i></Text>
                        <Text fontSize="12">Add to Cart</Text>
                    </Button>
                    <HStack mt="0.5em" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
                        <Text fontSize="12" display="flex">
                            Open-Box:
                            <Text fontSize="12" ml="2px" fontWeight="light" color="#0046be">
                            from $141.99
                        </Text>

                        </Text>
                    </HStack>
                </Box>
            </Box>
        </div>

        </Box>
      </div>
    </>
  )
}


export default AllProductPage;
