import React, { Component, Fragment } from 'react';
import '../App.css';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birth_year: '',
            gender: '',
            characterList: [],
            starWarsList: this.props.starWarsList
        }
    }

  componentDidMount(){
        console.log('addcharacter mounted');
    }

    // handle changes to fields
    handleChanges = (event) => {
        if (event.target.name === 'name') {
            this.setState({ name: event.target.value });
        }
        else if (event.target.name === 'birth_year') {
            this.setState({ birth_year: event.target.value });
        }
        else if (event.target.name === 'gender') {
            this.setState({ gender: event.target.value });
        }
    }

  

    // handle submission
    handleSubmission = (event) => {
        event.preventDefault();
        let newCharacter = { name: this.state.name, birth_year: this.state.birth_year, gender: this.state.gender };
        this.state.characterList.push(newCharacter);
        this.state.starWarsList.unshift(newCharacter);
        this.setState({
            characterList: this.state.characterList,
            starWarsList: this.state.starWarsList
        })
        this.props.updateCharacterList(this.state.starWarsList);
        this.setState({
            name: '',
            birth_year: '',
            gender: ''
        })
    }

    // display form
    render() {
        return (
            <Fragment>
                <form action="">
                   <fieldset>
                       <legend>Add A Character Form</legend>
                       <div className="form-group">
                           <label htmlFor="name">Name:</label>
                           <input type="text" name='name' id='name' onChange={this.handleChanges} value={this.state.name}/>
                       </div>

                       <div className="form-group">
                           <label htmlFor="birth_year">Birth Year:</label>
                           <input type="text" name='birth_year' id='birth_year' onChange={this.handleChanges} value={this.state.birth_year}/>
                       </div>

                       <div className="form-group">
                           <label htmlFor="gender">Gender:</label>
                           <select onChange={this.onChange}>
                                <option value="">--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                           </select>
                       </div>

                       <div className="form-group">
                           <button onClick={this.handleSubmission}>Submit</button>
                       </div>
                   </fieldset>
                </form>

                {this.state.characterList.map(
                    (character,inx) => {
                        return (
                            <div key={inx}>
                                <p>Name: {character.name}</p>
                                <p>Birth Year: {character.birth_year}</p>
                                <p>Gender: {character.gender}</p>
                            </div>
                        )
                    }
                )}
            </Fragment>
        );
    }
}

export default AddCharacter;