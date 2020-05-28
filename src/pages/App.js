import React from 'react';
import NavBar from '../NavBar/NavBar';
import {Route} from 'react-router-dom';
import Guest from './Guest';
import Feed from './Feed'
import Login from './Login'
import SignUp from './SignUp'
import ConnectSpotify from './ConnectSpotify'
import {AuthProvider} from '../Auth'
import SecuredRoute from '../SecuredRoute/SecuredRoute'
import '../App.css';
import TopFive from "../TopFive/TopFive";

class App extends React.Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <NavBar/>
          <Route exact path='/' component={Guest}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/auth' component={ConnectSpotify}/>
          <SecuredRoute path='/feed' component={Feed}/>
        </AuthProvider>
      </div>
    );
  }
}
export default App
