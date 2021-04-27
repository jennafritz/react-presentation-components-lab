import React from 'react';
const { Component } = require("react");

// Code SimpleComponent Here
class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: 'happy'
        }
    }
    handleClick = () => {
        this.setState({
            mood: 'sad'
        })
    }

    render() {
        return (
        <div onClick = {this.handleClick}>
            {this.state.mood}
        </div>
    )}
}   

SimpleComponent.defaultProps = {
    mood: 'happy'
}

export default SimpleComponent