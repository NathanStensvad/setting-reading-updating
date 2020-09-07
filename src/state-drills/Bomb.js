import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0,
        p: 'tick'
    };
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    displayName() {
        
        if(this.state.count >= 8) {
            clearInterval(this.interval)
            return 'BOOM!!!!'
        }
        else if(this.state.count % 2 === 0){
            return 'tick'
        }
        else {
            return 'tock'
        }
    }

    render() {
        return (
            <div>
                <p>{this.displayName()}</p>
            </div>
        )
    }
}

export default Bomb;