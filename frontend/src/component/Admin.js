import React from 'react';
import '../styles/admin.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sub: "",
            title: "",
            srno: "",
            ylink: "",
            videoid: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    postylinks=(data)=>{
        console.log(data);
        var url = 'http://localhost:5000/sub/ylinkapi/';

        fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(response => response.json()); // parses JSON response into native JavaScript objects

    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const {sub, title, srno, ylink, videoid} = this.state;
        event.preventDefault();
        let subdata = {
            "sub":sub,
            "title":title,
            "srno":srno,
            "ylink":ylink,
            "id":videoid
        };
        this.postylinks(subdata);
        //console.log(subdata);
    }


    render() {
        return (
            <Form action="http://localhost:5000/sub/ylinkapi/" method="post" className="admin-form">
                <FormGroup>
                   Title : <Input onChange={this.handleChange} type="text" name="title"  />
                </FormGroup>
                <FormGroup>
                    Srno : <Input onChange={this.handleChange} type="text" name="srno"  />
                </FormGroup>
                <FormGroup>
                    Youtube link : <Input onChange={this.handleChange} type="text" name="ylink" />
                </FormGroup>

                <FormGroup>
                    Video id : <Input onChange={this.handleChange} type="text" name="videoid" />
                </FormGroup>

                <FormGroup>
                    Subject :
                    <Input onChange={this.handleChange} type="select" name="sub" id="exampleSelect">
                        <option value="null" >select subject</option>
                        <option value="economics" >economics</option>
                        <option value="ctet">ctet</option>
                        <option value="polity">polity</option>
                        <option value="environment">environment</option>
                    </Input>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Submit</Button>
            </Form>
        );
    }
}