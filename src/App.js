// create your App component here
import React from 'react';

export default class App extends React.Component {

    state = {
        spacePeople: []
    }

    render() {
        return(
            <div>
                <p>{this.state.spacePeople.map( person => person.name )}</p>
            </div>
        )
    }


    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then( res => res.json())
        .then( data => {
            this.setState({
                spacePeople: data.people
            })
        })
    }
}