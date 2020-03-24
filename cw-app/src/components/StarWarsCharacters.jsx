import React, { Component, Fragment } from 'react';

class StarWarsCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }

    componentDidMount(){
        console.log('starwarscharacters mounted');
    }
  
    // display characters' name, birth year, and gender
    render() { 
        return ( 
            <Fragment>
                <h2>Star Wars Characters</h2>
                {this.props.starWarsList.map(
                    (character,inx) => {
                        return (
                            <div key={inx}>
                                <p>Name: {character.name}</p>
                                <p>Birth Year: {character.birth_year}</p>
                                <p>Gender: {character.gender}</p>
                                <br/>
                            </div>
                        )
                    }
                )}
            </Fragment>
         );
    }
}
 
export default StarWarsCharacters;