import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../App.css';
import StarWarsCharacters from './StarWarsCharacters';
import AddCharacter from './AddCharacter';
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starWarsList: []
        }
    }

    componentDidMount() {
        this.loadData();
    }

    // load data needed
    loadData = async () => {
        const response = await fetch('https://swapi.co/api/people/');
        const data = await response.json();
        this.setState({ starWarsList: data.results });
        console.log(this.state.starWarsList);
    }

    // update list of star wars characters
    updateCharacterList = (newList) => {
        this.setState({ starWarsList: newList });
    }

    // pass in the array into both StarWarsCharacters and AddCharacter components and pass in the update method to AddCharacter.
    // Display each component through links
    render() {
        return (
            <Fragment>
                <h1>03 24 2020 Classwork App</h1>
                <Router>
                    <span className="link-group">
                        <Link to='/'>Home</Link>
                    </span>

                    <span className="link-group">
                        <Link to='/star-wars-characters'>Star Wars Characters</Link>
                    </span>

                    <span className="link-group">
                        <Link to='/add-character-form'>Add A Character</Link>
                    </span>

                    <Route path='/star-wars-characters'>
                        <StarWarsCharacters starWarsList={this.state.starWarsList}/>
                    </Route>

                    <Route path='/add-character-form'>
                        <AddCharacter starWarsList={this.state.starWarsList} updateCharacterList={this.updateCharacterList}/>
                    </Route>
                </Router>
            </Fragment>
        );
    }
}

export default AppContainer;