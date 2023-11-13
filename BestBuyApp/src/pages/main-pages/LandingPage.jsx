import React from 'react'
import Navbar from '../../Components/main-components/Navbar';
import styles from "../../styles/landingPage.module.css"
import ProductBox from '../../Components/side-components/ProductBox';
import { HrLine } from '../../Components/side-components/HrLine';
import Product01Box from '../../Components/side-components/Product01Box';

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <div className={styles.yellowContainer}>
          
        </div>
        <div className={styles.greyContainer}>
          <div className={styles.productBoxes}>
            <div>
               <ProductBox 
               src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/mybbymembership_techblack_topdeals-99c13475-5626-4bb0-ba30-05d62792caa0.png;maxHeight=370;maxWidth=370"
               title="Exclusive Member Deals"
               />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-img-icons-laptop-7d08a055-6252-465a-9535-2f1182410434.jpg;maxHeight=370;maxWidth=370"}
              title={"Laptops & Computers"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501902_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"TVs & Projectors"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6562/6562643_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Video Games, VR & Collectibles"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549888_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Major Appliances"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6509/6509650_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Apple"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6529/6529721_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Cell Phones & Accessories"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6332/6332173_rd.jpg;maxHeight=370;maxWidth=370"}
              title={"Headphones"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6557/6557560_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"PC Gaming"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464584_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Tablets & E-Readers"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6551/6551333cv12d.jpg;maxHeight=370;maxWidth=370"}
              title={"Sound Bars, Bluetooth Speakers & Home Audio"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323758_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Cameras, Camcorders & Drones"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494386ld.jpg;maxHeight=370;maxWidth=370"}
              title={"Wearable Technology"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6472/6472004_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Small Appliances, Floor Care & Home Air Quality"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441424_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Smart Home, Security & Wi-Fi"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6540/6540778_sd.jpg;maxHeight=370;maxWidth=370"}
              title={"Printers & Computer Accessories"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6522/6522477_rd.jpg;maxHeight=370;maxWidth=370"}
              title={"Electric Transportation"}
              />
            </div>
            <div>
              <ProductBox 
              src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470759ld.jpg;maxHeight=370;maxWidth=370"}
              title={"Collectibles & Toys"}
              />
            </div>
          </div>
        </div>
      
      <div className={styles.middleContainer}>
      <span className={styles.newArrivals}>
            New Arrivals
        </span>
      <HrLine bgColor={"grey"} height={"1px"} />
       
       <div className={styles.newArrivalsProducts}>
          <Product01Box />
          <Product01Box />
          <Product01Box />
          <Product01Box />
          <Product01Box />
       </div>
      </div>
    </div>
  )
}

export default LandingPage;