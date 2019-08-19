import React from 'react';
import {Nav, NavItem, NavLink as Bslink, Button, Navbar, NavbarToggler, Collapse} from 'reactstrap';
import {NavLink} from "react-router-dom";
import './sidebar.css';

export default class Homesidebar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: true,
            sub : props.sub,
            ylinks: [],
            isOpen: false
        };
    }

    fetchylinks=()=>{
        let {sub} = this.state;
        if(sub!=="null"){
            var url = 'http://localhost:5000/sub/ylinkapi/'+sub;
            fetch(url).then( result => result.json())
                .then(resdata => {
                    if (resdata.length >0 ){
                        this.setState({ylinks: resdata[0].ylinks});
                        //console.log(this.state.ylinks);
                    }
                });
        }
    }

    componentDidMount() {
        this.fetchylinks();
    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        let {sub, ylinks} = this.state;
        console.log(ylinks);
        return (
            <div >
                <Navbar className="sidebar" color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar vertical>
                            {
                                ylinks.map(({ title, id, srno }, key) => (
                                    <NavItem className="sideitem" key={key}>
                                        <Bslink tag={NavLink} to={`/sub/${sub}/${id}`}>{srno}. {title}</Bslink>
                                    </NavItem>
                                ))
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}