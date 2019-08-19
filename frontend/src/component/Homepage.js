import React from 'react';
import Homesidebar from './parts/Homesidebar';
import HomeContant from './parts/HomeContant';
import {Container, Row, Col } from "reactstrap";
import '../styles/homepage.css';
export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suggestion: [],
            text: '',
        }
    }

    render() {
        return(
            <Container fluid className="bheader">
                <Row>
                    <Col className="playlist" md="auto"> <Homesidebar /> </Col>
                    <Col><HomeContant/> </Col>
                </Row>
            </Container>
        );
    }
}