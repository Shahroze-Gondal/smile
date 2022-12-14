import React from "react";
import './Person.css';

const Person = (props) =>{
    const style ={
        '@media (min-width:500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Well I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type = 'text' onChange={props.changed} value={props.name}></input>
        </div>
    )
};

export default Person;