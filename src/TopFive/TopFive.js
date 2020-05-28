import React from 'react';
import styled from "styled-components";
import { render } from '@testing-library/react';


const Card = styled.div`
    width: 600px;
    height: 400px;
    background-color: #d695df;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 50px;
    margin-left: 50px;
`;
//old grey card: #8f8f8f

const Title = styled.div`
    margin-top: 5px;
    margin-left: 10px;
    font: "Helvetica Narrow";
    font-size: 250%;
    font-weight: 300;
    color: white;

    position: relative;
    z-index: 1;
`;

const TitleAccent = styled.span`
    font-weight: bold;
`;
//accent color was: #AACFCF

//note: spotify green #65d26e
const HorizontalLine = styled.div`
    height: 2px;
    width: 250px;
    background-color: white;

    position: relative;
    bottom: 4px;
    left: 12px;

    margin-bottom: 18px;

    z-index: 0;
`;

const ListEntry = styled.div`
    margin-left: 10px;
    margin-bottom: 20px;
    font: "Helvetica Narrow";
    font-size: 160%;
    color: white;
`;

const Badge = styled.span`
    width: 30px;
    height: 30px;

    padding-bottom: 25px;

    position: relative;
    bottom: 4px;
    margin-left: 5px;
    margin-right: 10px;

    background-color: white;
    border-radius: 5px;
    color: #d695df;
    display: inline-block;
    text-align: center;
    font-size: large;
`;

class TopFive extends React.Component {
    render() {
        return (
            <Card>
                <Title>Top 5 <TitleAccent>{this.props.type}</TitleAccent> </Title>
                <HorizontalLine />
                <ListEntry> <Badge> 1 </Badge> {this.props.items[0]} </ListEntry>
                <ListEntry> <Badge> 2 </Badge> {this.props.items[1]} </ListEntry>
                <ListEntry> <Badge> 3 </Badge> {this.props.items[2]} </ListEntry>
                <ListEntry> <Badge> 4 </Badge> {this.props.items[3]} </ListEntry>
                <ListEntry> <Badge> 5 </Badge> {this.props.items[4]} </ListEntry>
            </Card>
        );
    }
}

export default TopFive;
/** 
const TopFive = ({type}, {items}) => (
    <Card>
        <Title>Top 5 <TitleAccent>{type}</TitleAccent> </Title>
        <HorizontalLine />
        <ListEntry> <Badge> 1 </Badge> {TopFive.items[0]} </ListEntry>
        <ListEntry> <Badge> 2 </Badge> {items[1]} </ListEntry>
        <ListEntry> <Badge> 3 </Badge> {items[2]} </ListEntry>
        <ListEntry> <Badge> 4 </Badge> {items[3]} </ListEntry>
        <ListEntry> <Badge> 5 </Badge> {items[4]} </ListEntry>
    </Card>
)
*/