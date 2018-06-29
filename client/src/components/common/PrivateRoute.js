import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const PrivateRoute =  ({components : Component, auth, ...rest}) => (
  <Route>

)
PrivateRoute.PropTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = ({
    auth: state.auth
}) 
export default connect (mapStateToProps)(PrivateRoute);