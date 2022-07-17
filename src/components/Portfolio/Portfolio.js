// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import categoryList from '../../models/CategoryList'
import dataList from '../../models/dataList'
import Toolbar from './Toobar/Toolbar'
import ProjectList from './ProjectList/ProjectList'

export class Portfolio extends Component {
  state = {
      selected: 'All',
  }

  constructor(props) {
    super(props);
    this.projects = dataList.map((item, index) => Object.assign({}, item, {key: index}));
    this.projectFiltering = this.projects.filter((item) => item.category);
    this.filters = categoryList;
  }

  hanleClick = (filter) => {
    if (filter === this.state.selected) {
      return
    };

    console.log(filter);
    this.setState({selected: filter});

    if (filter === 'All') {
      this.projectFiltering = this.projects.filter((item) => item.category);
    } else {
      this.projectFiltering = this.projects.filter((item) => item.category === filter);
    }
  }

  render() {
    return (
      <div className='portfolio'>
        <Toolbar filters = {this.filters} selected = {this.state.selected} onSelectFilter = {this.hanleClick}/>
        <ProjectList projects = {this.projectFiltering}/>
      </div>
    )
  }
}


export default Portfolio
