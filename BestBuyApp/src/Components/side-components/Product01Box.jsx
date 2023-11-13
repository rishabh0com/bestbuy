import React from 'react'


const Product01Box = ({title,src}) => {
  return (
    <div
    style={{
      border : "1px solid grey",
      margin : "5px",
      height : "236px",
      width : "295px",
      borderRadius :"3px"
    }}
    >
      <div>
        <img src={src} alt="productImage" />
      </div>
      <p>
        <a href="">{title}</a>
      </p>

    </div>
  )
}

export default Product01Box;
