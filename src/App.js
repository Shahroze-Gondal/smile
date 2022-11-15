import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'fas', name: 'Arya', age: 18 },
      { id: 'fsfda', name: 'Jon Snow', age: 24 }
    ],
    otherState: 'this is some other state',
    showPersons: false
  }

  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    console.log(persons)

    this.setState({
      persons: persons
  });
  }

  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    }
    )
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons =[...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style ={
      backgroundColor: 'yellow',
      border: '1px solid green',
      padding: '8px',
      font: 'inherit',
      borderRadius: '10px',
      ':hover':{
        backgroundColor: 'green'
      }
    }

    let persons = null;
    if ( this.state.showPersons ){
      persons = (
        <div>
          {
          this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} age={person.age} key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
         })
         }
        </div>
      );
      style.backgroundColor= 'gray';
      style[':hover'] ={
        backgroundColor: 'blue',
        color: 'black'
      }
    }

    const classes = []
    if (this.state.persons.length <= 2);
    {
       classes.push('green');
    }
    if (this.state.persons.length <= 1);{
       classes.push('bold');}
    
  return (
    <StyleRoot>
    <div className="App">
      <h1>Hello</h1>
      <p className={classes.join(' ')}>This is paragraph</p>
      <button
      style={style}
      onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}
    </div>
    </StyleRoot>
  );
}
}

export default Radium(App);
