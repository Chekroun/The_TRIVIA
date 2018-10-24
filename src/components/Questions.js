import React, { Component, PropTypes } from 'react'

class Question extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        fetch('http://jservice.io/api/random', {method: 'get'})
        .then(response => console.log(response))
        .then(data => console.log(data))
    }
    render() {
        return(
            <div>{this.componentDidMount}</div>
        );
    }

}

export default Question