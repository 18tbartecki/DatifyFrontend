import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import authClient from './Auth';

//NOT used but might need someting like this for real login
class Callback extends Component {
  componentDidMount() {
    authClient.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);