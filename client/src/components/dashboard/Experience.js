import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from ' react-router-dom';

 class Experience extends Component {
  render() {
      const experience = this.props.experience.map(exp => (
        <tr></tr>

      ))
    return (
      <div>
        
      </div>
    )
  }
}
export default connectExperience;
