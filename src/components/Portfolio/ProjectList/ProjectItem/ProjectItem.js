import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ProjectItem extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
  }

  render() {
    const {img, categoryName} = this.props;

    return (
      <div className='project-item'>
        <img src = {img} alt = {categoryName}/>
      </div>
    )
  }
}


export default ProjectItem
