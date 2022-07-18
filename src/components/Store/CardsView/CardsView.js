import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard/ShopCard'

function CardsView(props) {
  const {cards} = props;

  return (
    <div className='cards-view'>
        {cards.map((item) => <ShopCard key = {item.key} product = {item}/>)}
    </div>
  )
}

CardsView.propTypes = {
  cards: PropTypes.instanceOf(Array).isRequired,
}

export default CardsView
