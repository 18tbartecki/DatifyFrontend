import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import styled from 'styled-components';
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

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/auth");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

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
      <Title><Bold>Log In</Bold></Title>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword"> 
        <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button bsPrefix="btn btn-primary btn-block" variant="primary" type="submit">Log in</Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);