import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
  const {product} = props;

  return (
    <div className='shop-item'>
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="product-name">
          <p>{product.name}</p>
        </div>
        <div className="product-color">
          <p>{product.color}</p>
        </div>
        <div className="product-price">
          <p>${product.price}</p>
        </div>
        <button type="button" className="btn-add-to-cart">add to cart</button>
    </div>
  )
}


ShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}


export default ShopItem
