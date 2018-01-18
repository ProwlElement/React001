import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id){
    this.props.onDelete(id);
  }

  // onDelete(){
  //
  // }

  render() {
    // console.log(this.props);
    let $this = this.props.project;
    return (
      <li className = "Project">
        <strong>{$this.title}</strong>: {$this.category} <a href="#" onClick={this.deleteProject.bind(this, $this.id)}>X</a>

      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
