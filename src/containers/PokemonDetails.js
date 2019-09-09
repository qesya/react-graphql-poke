import React, { useState, useEffect } from 'react';
import {PokemonInfo} from '../components/PokemonInfo';
import IDService from '../services/IDService';


export default () => {
  // const [ current, setCurrent] = useState(10);
  const [ pokemonIds, setPokemonIds ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  useEffect(async () => {
    const {data, loading} = await IDService.getPokemonIds(pokemonIds);
    setLoading(loading);
    setPokemonIds(data.pokemonIds)
  }, []);

  if(loading){
    return <p>Loading... </p>
  }
    return (
      <div className='main clear-fix'>
        <React.Fragment>
        {
          pokemonIds.map(({ image, maxCP, maxHP, types, id, name, evolutions }) => (
            <PokemonInfo id={id} image={image} maxCP={maxCP} maxHP={maxHP} name={name} types={types} evolutions={evolutions} />
          ))
          }
        </React.Fragment>
      </div>
    )
}