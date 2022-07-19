import React, { useState }from 'react';
import PropTypes from 'prop-types';
import DropdownList from './DropdownList/DropdownList';

function Dropdown(props) {
    const [isOpen, toggleState] = useState(false);

    const handleClick = () => {
        console.log(isOpen ? 'Closing': 'Opening');
        toggleState((prevState) => !isOpen);
    }
    
  return (
    <div className='wrapper'>
        <button className="btn" onClick={handleClick}>
            <span>Задание 3 - Dropdown </span><i className="material-icons">public</i>
      </button>
        {isOpen && <DropdownList/>}
    </div> 
  )
}

Dropdown.propTypes = {
  props: PropTypes.any,
}


export default Dropdown
