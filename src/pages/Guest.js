import React from 'react';
import { withRouter, Redirect } from "react-router";
import styled from 'styled-components';
import {Button} from 'react-bootstrap';

const Welcome = styled.div`
  font: "Helvetica Narrow";
  font-size: 500%;
  font-weight: bold;
  color: #d695df;
  text-align: center;

  margin-top: 250px;
`;

const SubTitle = styled.div`
    font: "Helvetica Narrow";
    font-size: 100%;
    color: #8d8d8d;

    position: relative;
    bottom: 10px;
    text-align: center;
`;

const PageLayout = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 200px;
`;

const LargeText = styled.span`
  font: "Helvetica Narrow";
  font-size: 200%;

  color: #d695df;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Bubble = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 10px;

  position: relative;
  top: 15px;
  margin: 0px 35px;

  background-color: #d695df;
`;

const ButtonFormat = styled.div`
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
    background-color: #b076b8;
    border-color: #b076b8;
  }

  .btn {
    background-color: #d695df;
    border-color: #d695df;
    width: 150px;
    position: relative;
    bottom: 100px;
  }
`;

const Guest  = ({ history }) => {
    return (
      <div>
      <Welcome> Welcome to Datify! </Welcome>
      <SubTitle> Your Spotify listening stats, delivered more than once a year. </SubTitle>
      <PageLayout>
        <LargeText>Create an Account</LargeText>
        <Bubble />
        <LargeText>Connect to Spotify</LargeText>
        <Bubble />
        <LargeText>View Your Trends</LargeText>
      </PageLayout>
      <PageLayout>
        <ButtonFormat>
          <Button className="btn btn-dark" onClick={() => history.push("/signup")}> Sign Up </Button>
        </ButtonFormat>
        </PageLayout>
      </div>
    );
}
export default withRouter(Guest)
