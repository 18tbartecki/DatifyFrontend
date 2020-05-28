import React, {useCallback} from "react";
import {withRouter} from "react-router";
import app from "../base";
import styled from 'styled-components';
import {Button} from 'react-bootstrap';


const Title = styled.div`
    font: "Helvetica Narrow";
    font-size: x-large;
    color: #8d8d8d;
    margin-bottom: 10px;
    text-align: left;
    font-weight: bold;
`;

const ConnectSpotify = ({history}) => {
    const handleSignUp = useCallback(async event => {
        console.log("TEST: " + window.location.href);

        var unParsed = window.location.href;
        var AuthKey = unParsed.substring(unParsed.lastIndexOf("=") + 1);
        console.log("AUTHKEY: " + AuthKey);

        try {
        await app
        history.push("/feed");
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

            <Title> Link Spotify </Title>
            <div class="mb-3">
            <Button href="https://accounts.spotify.com/authorize?response_type=code&client_id=2d77bc05e0f841679c7455f113130e4f&scope=user-top-read user-read-playback-state&redirect_uri=http://localhost:3000/feed"
                bsPrefix="btn btn-primary btn-block" variant="primary">Connect Spotify</Button>
            </div>
        </div>
    );
};

export default withRouter(ConnectSpotify);