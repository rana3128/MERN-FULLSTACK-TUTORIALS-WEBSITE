import React from 'react';
import {Route, Switch} from "react-router-dom";
import Playtutorial from './Playtutorial';
import {Container, Row, Col} from 'reactstrap';
import '../styles/subpage.css';
import SubSidebar from './parts/SubSidebar';

export default class SubjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: this.props.match.params.sub,
        }
    }

    render() {
        //console.log(this.props.match.params);
        return(
            <Container fluid className="bheader">
                <Row>
                    <Col className="playlist" md="auto"><SubSidebar sub= {this.state.sub} /></Col>
                    <Col >
                        <h4>Page name is : {this.state.sub}</h4>
                        <Route path={`${this.props.match.path}/:tylink`}  component={Playtutorial} />
                    </Col>
                </Row>
            </Container>

        );
    }
}