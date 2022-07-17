import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Button extends Component {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
  }

  render() {
    const {categoryName, selected, onSelectFilter} = this.props;

    return (
      <button type='button' className= {categoryName === selected ? 'filter-button selected-filter-button' : 'filter-button'} onClick = {() => onSelectFilter(categoryName)}>{categoryName}</button>
    )
  }
}


export default Button
