import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/main-components/Navbar';
import styles from "../styles/allProductPage.module.css"
import {Box,Text,Image,HStack,Button,VStack} from "@chakra-ui/react"
import CategoryProduct from '../Components/main-components/categoryProduct';
import axios from 'axios';
import {Link} from "react-router-dom"
import { AuthContext } from '../Context/AuthContextPro';


const AllProductPage = () => {

    const [cateProduct, setCateProduct] = useState([])
    const [count,setcount] = useState(0)


    const {category,setCategory,proCount,setProCount} = useContext(AuthContext)

    console.log(category)
 

    async function getCategoryProduct(){
        try {
            console.log("call")
            let response = await axios.get(`http://localhost:3000/productData`)
            let data = await response.data
            setCateProduct(data)

        } catch (error) {
          console.log(error)   
        }
    }

    useEffect(()=>{
        getCategoryProduct();
    },[category,setCategory])


  return (
    <>
        <div>
            <Navbar />
    
            <Box mt="2em">
                <hr />
            </Box>
    
            <Box display="flex" p="4em" justifyContent="space-between">
               <    div className={styles.sideOption}>

                <Box>
                <Text >Category</Text>
                    <hr />
                    <VStack p="1em" align='stretch'fontSize="15px" color="#0046be">
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("phone")}}>
                            Phone's
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("laptop")}}>
                          Laptop's
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("tv")}}>
                            TV's
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("camera")}}>
                            Camera's
                        </Text>
                    </VStack>

                </Box>

                <Box>

                <Text >Brand</Text>
                    <hr />
                    <VStack p="1em" align='stretch'fontSize="15px" color="#0046be">
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("google")}}>
                            Google
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("microsoft")}}>
                            Microsoft
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("hp")}}>
                            HP
                        </Text>

                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("apple")}}>
                            Apple
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("asus")}}>
                            Asus
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("lenovo")}}>
                            Lenovo
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("samsung")}}>
                            Samsung
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("motorola")}}>
                            Motorola
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("one plus")}}>
                            One Plus
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("sony")}}>
                            Sony
                        </Text>
                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("LG")}}>
                            LG
                        </Text>

                        <Text _hover={{textDecorationLine:"underline",cursor:"pointer"}} fontWeight="light" onClick={()=>{setCategory("canon")}}>
                            Canon
                        </Text>

                    </VStack>

                </Box>

               </div>
               
               <div className={styles.mainContainer}>
                    <Box 
                     pt="1em" pb="1em"
                     borderBottom="1px solid  rgb(206, 204, 204)"
                     borderTop="1px solid  rgb(206, 204, 204)"
                     >
                       <Text>{category}</Text>
                    </Box>
                
                    <Box>
                        {cateProduct.map((item,index)=>{
                            
                            if(category == item.category || category == item.brand){
                            
                                return (
                                    <Box>
                                        <CategoryProduct
                                        title={item.title}
                                        src={item.images[0]}
                                        price={item.price}
                                        wasPrice={item.wasPrice}
                                        brand={item.brand}
                                        model={item.model}
                                        sku={item.sku}
                                        item={item}
                                         />
                                    </Box>
                                )
                            }
                            if(category == "All Product"){

                                return (
                                    <Box>
                                        <CategoryProduct
                                        title={item.title}
                                        src={item.images[0]}
                                        price={item.price}
                                        wasPrice={item.wasPrice}
                                        brand={item.brand}
                                        model={item.model}
                                        sku={item.sku}
                                        item={item}
                                         />
                                    </Box>
                                )
                            }
                        })}
                    </Box>
                </div>
    
                
    
            </Box>
        </div>
    </>
  )
  
}


export default AllProductPage;
