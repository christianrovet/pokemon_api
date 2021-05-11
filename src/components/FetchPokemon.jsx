import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const FetchPokemon = (props) => {
    // destructure
    const [pokemon, setPokemon] = useState([]);

    // create function to process the button that will call api
    const getPokemon = () => {
        //fetch api
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            //convert api data to JSON
            .then(response => response.json())
            //send JSON to the state
            .then(response => {
                setPokemon(response.results)
            })
    }

    return (
        <div className='w-25 mx-auto'>
            <button type="submit" onClick={getPokemon}>Fetch Pokemon</button>
            { pokemon.map((pokemon, i) => {
                return <ListGroup><ListGroup.Item key={i}>{pokemon.name}</ListGroup.Item></ListGroup>
            })
            }
        </div>
    );
}

export default FetchPokemon;