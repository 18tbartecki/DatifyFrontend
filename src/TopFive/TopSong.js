import React from 'react';
import styled from "styled-components";


const Track = styled.div`
    font: "Helvetica Narrow";
    font-weight: bold;
    font-size: 320%;
    color: #d695df;
`;

const Listens = styled.div`
    font: "Helvetica Narrow";
    font-size: small;
    color: #d695df;

    position: relative;
    bottom: 15px;
`;

class TopSong extends React.Component {
    render() {
        return (
                <div>
                    <Track> {this.props.song} </Track>
                </div>
        );
    }
}
export default TopSong;