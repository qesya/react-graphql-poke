import React, { useState, useEffect } from 'react'
import {PokemonCard} from '../components/PokemonCard';
import DBService from '../services/DBService';

export default () => {
  const [ current, setCurrent] = useState(10);
  const [ pokemons, setPokemons ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  useEffect(async () => {
    const {data, loading} = await DBService.getPokemons(current);
    setLoading(loading);
    setPokemons(data.pokemons)
  }, []);

  const loadMore =  async () => {
    setCurrent(current + 10);
    const {data, loading} = await DBService.getPokemons(current);
    setLoading(loading);
    setPokemons(data.pokemons)
  };
  if(loading){
    return <p>Loading... </p>
  }
    return (
      <div className='main clear-fix'>
              <React.Fragment>
                {
                  pokemons.map(({ id, name, image, maxCP, maxHP, types }) => (
                    <PokemonCard id={id} image={image} maxCP={maxCP} maxHP={maxHP} name={name} types={types} />
                  ))
                }
                <div className='clear-fix'>
                  <br />
                  <button className='more-btn' onClick={() => { loadMore() }}>Load More Result...</button>
                </div>
              </React.Fragment>
      </div>
    )
}
