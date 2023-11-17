
import {Box,Text,Image,HStack,Button} from "@chakra-ui/react"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextPro";


const CategoryProduct = ({title,src,price,wasPrice,brand,model,sku,item}) => {

    const {cartItem,setCartItem} = useContext(AuthContext)

  return (
    <div>
        <Box display="flex" pb="1em"  borderBottom="1px solid rgb(206, 204, 204)" >
            <Box w="20%" p="2em">
                <Image
                src={src}
                />
            </Box>

            <Box pt="2.8em" fontSize="12px" w="53%" >
                <Text fontWeight="light" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
                {title}
                </Text>
                <HStack color="black" pt="1em">
                    <Text color="black">Model</Text> <Text>:</Text> <Text fontWeight="light">{model}</Text>
                    <Text color="black">SKU</Text> <Text>:</Text> <Text fontWeight="light">{sku}</Text>
                </HStack >

                <HStack color="black" pt="1em">
                  <Text>Brand</Text><Text>-</Text><Text fontWeight="light">{brand}</Text>
                </HStack>

                <HStack color="black" pt="1em" spacing="3px">
                    <Text>
                        <i class="fa-solid fa-location-dot"></i>
                    </Text> 
                    <Text  fontWeight="light">Pick up</Text>
                    <Text>today</Text>
                    <Text fontWeight="light">at</Text>
                    <Text fontWeight="light" color="#0046be" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>NewYork</Text>
                </HStack>



                <Text color="black" pt="1em" display="flex" alignItems="center">
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
                <Text color="black" fontSize="25">${price}</Text>
                <HStack>
                    <Box bg="red" fontSize="13" fontWeight="bold" pl="4px" pr="4px"  h="20px" color="white">Save ${+wasPrice - +price}</Box>
                    <Text color="black" fontSize="12" fontWeight="light">Was ${wasPrice}</Text>
                </HStack>
                <Button onClick={()=>{
                    setCartItem([...cartItem,item]) 
                    alert(`🛒 Product Added : ${title}`)}} w="100%" mt="0.7em" h="1.8em" bg="rgb(255, 224, 0)" _hover={{backgroundColor:"yellow"}}>
                    <Text fontSize="12" mr="1em"><i class="fa-solid fa-cart-shopping"></i></Text>
                    <Text fontSize="12" >Add to Cart</Text>
                </Button>
                <HStack mt="0.5em" _hover={{textDecorationLine:"underline",cursor:"pointer"}}>
                    <Text color="black" fontSize="12" display="flex">
                        Open-Box:
                        <Text fontSize="12" ml="2px" fontWeight="light" color="#0046be">
                        from $141.99
                        </Text>

                    </Text>
                </HStack>
            </Box>
        </Box>

    </div>
  )
}


export default CategoryProduct;