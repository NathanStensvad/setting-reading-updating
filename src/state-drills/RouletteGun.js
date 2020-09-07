import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    
    state = {
        chamber: null,
        spinningTheChamber: false
    };
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    pullTrigger = () => {
        this.setState({
            spinningTheChamber: true,
        })
        this.timeout = setTimeout(() => {
            var rng = Math.ceil(Math.random() * 8);
            this.setState({
                spinningTheChamber: false,
                chamber: rng
            })
        }, 2000)
    }

    displayName() {
        if(this.state.spinningTheChamber) {
            return "spinning the chamber and pulling the trigger! ..."
        }
        else if(this.state.chamber === this.props.bulletInChamber) {
            return "BANG!!!!"
        }
        else {
            return "you're safe"
        }

    }

    render() {
        return (
            <div>
                <p>{this.displayName()}</p>
                <button onClick={() => this.pullTrigger()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;