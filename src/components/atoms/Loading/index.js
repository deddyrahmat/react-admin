import React from 'react'
import { Container } from 'react-bootstrap';

import './Loading.css';

const Loading = (props) => {
    return (
        <Container className={props.className}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

export default Loading
