import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { AuthContext } from "../Auth";
import app from "../base";

import styled from 'styled-components';

const BarColor = styled.span`
.navbar-dark {
    background-color: #d695df;
    height: 80px;
}
.btn-dark {
    background-color: #b076b8;
    border: 0px;
}

.navbar-brand {
    font-size: x-large;
    font-weight: bold;
}
`;


const NavBar = ({history}) => {
    const {currentUser} = React.useContext(AuthContext);

    const signOut = () => {
        app.auth().signOut()
        history.replace('/');
        
    };
    const signIn = () => {
        history.push('/login');
    };

    function renderButton(){
        if (!!currentUser){
            return <button className="btn btn-dark" onClick={() => signOut()}>Sign Out</button>
        } else {
            return <button className="btn btn-dark" onClick={() => signIn()}>Sign In</button>
        }
    }

    return (
        <BarColor>
            <nav className="navbar navbar-dark fixed-top">
                <Link className="navbar-brand" to="/feed">
                    Datify
                </Link>
                {renderButton()}
            </nav>
        </BarColor>
    );
  };
  
export default withRouter(NavBar)

// class NavBar extends React.Component {

//     render() {
        
//         const signOut = () => {
//             app.auth().signOut()
//             this.props.history.replace('/');

//           };
//           const signIn = () => {
//             this.props.history.replace('/login');

//           };

//         return (
//             <nav className="navbar navbar-dark bg-primary fixed-top">
//             <Link className="navbar-brand" to="/">
//                 Datify
//             </Link>
//             <button className="btn btn-dark" onClick={() => signOut()}>Sign Out</button>
//             </nav>
//         );
//     }
// }

// export default withRouter(NavBar);