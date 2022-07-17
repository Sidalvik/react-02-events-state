import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Button from './Button/Button'

export class Toolbar extends Component {
  static propTypes = {
    filters: PropTypes.instanceOf(Array).isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
  }

  render() {
    const {onSelectFilter, selected, filters} = this.props;

    return (
      <div className='toolbar'>
          {filters.map((item, index) => <Button key={index} categoryName = {item} selected = {selected} onSelectFilter = {onSelectFilter}/>)}
      </div>
    )
  }
}


export default Toolbar
