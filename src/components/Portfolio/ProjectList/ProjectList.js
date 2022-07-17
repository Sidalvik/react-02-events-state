import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProjectItem from './ProjectItem/ProjectItem' 

export class ProjectList extends Component {
  static propTypes = {
    projects: PropTypes.instanceOf(Array).isRequired,
  }

  render() {
    const {projects}= this.props;
    
    return (
      <div className='project-list'>
          {projects.map((item) => <ProjectItem key = {item.key} img = {item.img} categoryName = {item.category}/>)}
      </div>
    )
  }
}


export default ProjectList
