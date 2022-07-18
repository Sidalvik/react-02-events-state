import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem/ShopItem'

function ListView(props) {
  const {items} = props;

  return (
    <div className="list-view">
        {items.map((item) => <ShopItem key = {item.key} product = {item}/>)}
    </div>
  )
}

ListView.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
}

export default ListView
