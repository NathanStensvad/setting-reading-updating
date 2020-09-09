import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        accordion: []
    };

    state = {
        activeSection: null
    };

    handleSetActiveSection = (sectionIndex) => {
        this.setState({activeSection: sectionIndex})
    }

    renderContent() {
        const  {activeSection} = this.state
        return this.props.accordion.map((accord,index) => (
            <li key={index}>
                <button type='button' onClick={() => this.handleSetActiveSection(index)}>{accord.title}</button>
                {(activeSection === index) && <p>{accord.content}</p>}
            </li>
        ))
    }

    render() {
        return(
            <ul>
                {this.renderContent()}
            </ul>
        )
    }
}

export default Accordion;