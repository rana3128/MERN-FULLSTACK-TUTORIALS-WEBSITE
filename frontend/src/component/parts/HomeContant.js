import React from 'react';


export default class HomeContant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    render() {
        return(
            <div>
                <h1>Put Home page contant like
                    1. top tutorials
                    2. most recent tutorials
                    3. nots link
                    etc
                    <p>under development</p>
                </h1>
            </div>
        );
    }
}