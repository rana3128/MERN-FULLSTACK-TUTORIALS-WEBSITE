import React from 'react';
import Header from './parts/Header';
import Homesidebar from './parts/Homesidebar';
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
            <div>
                <h1>contact</h1>
            </div>
        );
    }
}