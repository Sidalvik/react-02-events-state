import React from 'react'
import PropTypes from 'prop-types'

function DropdownItem(props) {
  const {item, activateLine, style} = props;

  return (
    <li className='dropdown-item' onClick={() => activateLine(item.key)} style={style}>
        <a href={item.link}>{item.name}</a>
    </li>
  )
}

DropdownItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
  activateLine: PropTypes.func.isRequired,
  style: PropTypes.instanceOf(Object),
}


export default DropdownItem
