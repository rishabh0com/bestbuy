import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/main-components/Navbar';
import styles from "../../styles/landingPage.module.css"
import ProductBox from '../../Components/side-components/ProductBox';
import axios from "axios"
import Product01Box from '../../Components/side-components/Product01Box';


const LandingPage = () => {

  const [productsMilldle,setProductsMiddle] = useState([])
  const [product01Boxes,setProduct01Boxes] = useState([])

  async function getMiddleProducts(){
    try {
      let response = await axios.get(` http://localhost:3000/productBoxesData`);
      let data = response.data
      setProductsMiddle(data)
    } catch (error) {
      
    }
  }
  async function getProduct01Data(){
    try {
      let response = await axios.get(`http://localhost:3000/productData`)
      let data = await response.data
      setProduct01Boxes(data)
      
    } catch (error) {
      
    }
  }

  console.log("box",product01Boxes);
  useEffect(()=>{
    getProduct01Data()
    getMiddleProducts()
    
  },[])
  


  return (
    <>
        <Navbar />
        <div className={styles.yellowContainer}>
          <h1>Black Friday Deal</h1>
        </div>
        <div className={styles.greyContainer}>
          
          <div className={styles.productBoxes}>
            {
              productsMilldle.map((item)=>{
                return (
                  <div key={item.id}>
                  <ProductBox 
                  src={item.src}
                  title={item.title}
                  />
               </div>
                )})
            }
          </div>
        </div>
      
      <div className={styles.middleContainer}>
        <span className={styles.newArrivals}>
              New Arrivals
          </span>
        <hr />
       
        <div className={styles.newArrivalsProducts}>
          <div>
           <p><span>Outlet</span>Deals</p>
           <div>
               <div>
                 <h1 style={{color:"#CC0033"}}>Clearance <span style={{color:"black"}}>,</span></h1>
                 <h1>open-box</h1>
                 <h1>and more <span style={{color:"#CC0033"}}>.</span></h1>
               </div>
               <div>
                 <p>
                 Save when you shop the Best Buy Outlet for clearance, open-box, 
                 refurbished and pre-owned items.
                 </p>
                 <button className={styles.buttonPro} style={{marginTop:"25px"}}>View Outlet Deals</button>
               </div>
           </div>
          </div>
          <div>
           <p><span>Deal</span>of the Day</p>
           <hr />
            <div>
              <div >
                 <img  style={{height:"150px"}}
                 src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6530/6530085_sd.jpg;maxHeight=640;maxWidth=550" alt="" />
              </div>
              <div>
                <p>Insignia™ - 43" Class N10 Series LED Full HD TV</p>
                <p style={{marginTop:"5px",fontWeight:"bold"}}>$199.9</p>
                <p style={{marginBottom:"5px",textDecorationLine:"line-through"}}>$169.99</p>
                <button className={styles.buttonPro}>See Bonus deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    <div className={styles.yellowStrip} style={{color:"black" ,fontWeight:"600"}}>
       Insignia™ Multi-Function Pressure Cooker Recall.
    </div>

    <div className={styles.spellDivs}>

      <div style={{marginLeft:"2em"}}>
        <div style={{width:"8em"}}>
          <img src="https://pisces.bbystatic.com/image2/vector/BestBuy_US/dam/MyBestBuy_Memberships_VT-6b4c46f5-c44b-4283-bc8e-92cfb0419b70.svg" alt="" />
        </div>
        <p style={{marginTop:"1em",fontSize:"1.5em",fontWeight:"normal"}}>
        Don't miss out on the best deals
        </p>
        <p style={{marginTop:"1.1em",fontSize:"14px",fontWeight:"lighter"}}>
        Unlock even more exclusive member deals when you become a My Best Buy Plus™ or My Best Buy Total™ member.
        </p>
        <p className={styles.underLineP} style={{marginTop:"2em",fontSize:"11px",fontWeight:"lighter",color:"#0046be"}}>
          Discover more exclusive deals
        </p>
      </div>

      {product01Boxes.map((item,index)=>{
        if(index % 10 == 0){
          return(
            <div>
              <Product01Box 
              src={item.images[0]} 
              title={item.title}
              price={item.price} />
            </div>
          )  
        }
      })}

    </div>

    </>
  )
}

export default LandingPage;