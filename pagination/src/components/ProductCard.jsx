import React from 'react'

const ProductCard = ({image,title}) => {
  return (
    <div className='product-card'>
        <img src={image} alt={title} />
        <span>{title}</span>
    </div>
  )
}

export default ProductCard