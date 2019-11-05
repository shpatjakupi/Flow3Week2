import React, { useState, useEffect } from "react";

export default function SearchResults() {
   const [id, setId] = useState(1);
   const [joke, setJoke] = useState({value: ""});


   useEffect(()=> {

    
       
    function ChuckNorris() {
           console.log("fetching norris");
           fetch('https://api.chucknorris.io/jokes/random')
           .then(res => res.json())
           .then(joke => {setJoke(joke);})
           .catch(err => console.log("Error" + err))
       }
       ChuckNorris();
   
   
    },[id]);


    return (
        <div>
        <br>
        </br>
        <input value={id} onChange={e => setId(e.target.value)}/>

        <p> Joke: {joke.value}</p>

        </div>
    );

   


}