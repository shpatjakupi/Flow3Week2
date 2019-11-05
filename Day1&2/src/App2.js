import React from 'react';
import './App.css';
import { person, males, females } from "./file2";

const { firstName, email } = person;


function App() {
    return (
      <div className="App2">
       <p>{email}</p>
       <p>{firstName}</p>
      </div> 
    );
  }

  console.log([...males, ...females]);

  export default App;