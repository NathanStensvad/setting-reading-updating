import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };
    constructor(props) {
        super(props)
    }
    friendButton() {
        this.setState({who: 'friend'})
    }
    reactButton() {
        this.setState({who: 'react'})
    }
    worldButton() {
        this.setState({who: 'world'})
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.friendButton()}>Friend</button>
                <button onClick={() => this.reactButton()}>React</button>
                <button onClick={() => this.worldButton()}>World</button>
            </div>
        )
    }
}

export default HelloWorld;