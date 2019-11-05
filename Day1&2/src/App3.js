import React from 'react';
import './App.css';
import PropTypes from "prop-types";


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  export function WelcomePerson(props) {
    const person = props.person;
    const { firstName, lastName, email } = person;

    return (
        <div>
            <p>First Name: {firstName}, Last Name: {lastName}, Email: {email}</p>
        </div>
    );
  }
  
export default function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  Welcome.propTypes = {
    name: PropTypes.string
};
  