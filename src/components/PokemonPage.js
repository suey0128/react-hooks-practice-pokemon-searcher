import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArr, pokemonArrSetter] = useState ([])
  const [search, searchSetter] =useState ("")

  //GET data
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
     .then(res => res.json())
    .then(data => pokemonArrSetter(data))
    .catch(error => console.error('Error:', error))
  
  },[])

  //fliter out the array
  const fliteredPokemon = pokemonArr.filter((pokemon) => pokemon.name.includes(search))


  //POST upon submit
  const onFormSubmit = (newPokemon) => {
    console.log(newPokemon)
    //display on DOM
    pokemonArrSetter([...pokemonArr, newPokemon])

    //POST 
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(newPokemon)
      })
       .then(res => res.json())
      .then(data => console.log(data) )
      .catch(error => console.error('Error:', error))
  } 

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onFormSubmit={onFormSubmit}/>
      <br />
      <Search search={search} searchSetter={searchSetter}/>
      <br />
      <PokemonCollection fliteredPokemon={fliteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
