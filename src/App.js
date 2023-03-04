import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import {data} from './mocks/handlers'
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState(data)

  useEffect(()=> {
    axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          setCharacters(res.data)
        })
        .catch(err => console.log(err))
  }, [])

  console.log('test1')
  console.log(characters)
  console.log('test2')

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container characters={characters} />
    </div>
  );
}

export default App;
