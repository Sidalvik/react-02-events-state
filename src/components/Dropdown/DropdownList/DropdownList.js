import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from './DropdownItem/DropdownItem';

function DropdownList(props) {
  const menuList = [
    {name: 'Задание 1', link: '#task-1', key: '5'},
    {name: 'Задание 2', link: '#task-2', key: '6'},
    {name: '---Конец---', link: '#task-3', key: '7'},
    {name: 'Profile information', link: '#', key: '0'},
    {name: 'Change Password', link: '#', key: '1'},
    {name: 'Become PRO', link: '#', key: '2'},
    {name: 'Help', link: '#', key: '3'},
    {name: 'Log Out', link: '#', key: '4'},
  ];
    
  const [activeLine, onActiveLine] = useState(menuList[0].key);

  const handleClick = (key) => {
    onActiveLine(key);
    console.log('activeKey: ' + key);
  }

  const style = {
    color: "#5380F7",
  }

  return (
    <ul className='dropdown-list'>
        {menuList.map((item) =><DropdownItem key={item.key} item = {item} activateLine = {handleClick} style={activeLine === item.key ? style : null}/>)}
    </ul>
  )
}

DropdownList.propTypes = {
  props: PropTypes.any,
}

export default DropdownList
