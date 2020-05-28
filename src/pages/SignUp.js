import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";
import { client_id, scope } from '../config.json';
import styled from 'styled-components';
import SpotifyLogin from 'react-spotify-login';
import {Button, Form } from 'react-bootstrap';


const Title = styled.div`
  text-align: left;
  font: "Helvetica";
  font-size: x-large;
  margin-bottom: 10px;

  color: #8d8d8d;
`;

const Bold = styled.span`
 font-weight: bold;
`;

const bStyle = styled.span`
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
    background-color: #b076b8;
    border-color: #b076b8;
  }

  .btn {
    background-color: #d695df;
    border-color: #d695df;
  }
  .btn-block {
    width: 100%;
  }
`;


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {

    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/auth");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div class="px-5 col-lg-4">
      <style type="text/css">
        {`
        .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
		  		background-color: #b076b8;
		  		border-color: #b076b8;
		 	}

			.btn {
  				background-color: #d695df;
  				border-color: #d695df;
			}
        `}
      </style>

      <Title><Bold>Sign Up</Bold></Title>
      <Form onSubmit={handleSignUp}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword"> 
        <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
       
        <Button bsPrefix="btn btn-primary btn-block" variant="primary" type="submit">Sign Up</Button>
      </Form>
    </div>
  );
};

export default withRouter(SignUp);