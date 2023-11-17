import React from 'react'
import {Link} from "react-router-dom"

 const ProductBox = ({src,title}) => {
  return (
    <div 
    style={{
        border : "0px solid black",
        // height: "10em",
        // width : "11em",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
        }}>
        <div 
        style={{
            border : "3px solid #598bf7",
            height: "150px",
            width : "150px",
            borderRadius : "50%",
            backgroundColor : "white",
            padding:".8rem",
            overflow:"hidden",
            margin : "auto",
            display:"flex",
            alignItems:"center"
        }}>
            <img 
            style={{
                maxHeight: "100px",
                maxWidth: "100%",
                border : "0px solid black",
                margin : "auto",
          
            }}
            src={src} alt="productImage" />
        </div>
        <p
        style={{
            textAlign:"center",
            marginTop:"5px",
            color:"#0457C8",
            fontWeight:"bold",
            fontSize:"12px"
        }}
        >{title}</p>
    </div>
  )
}

export default ProductBox;
