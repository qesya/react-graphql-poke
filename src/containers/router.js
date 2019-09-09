import React from 'react'
import Pokemons from './Pokemons'
import PokemonDetailsPage from './PokemonDetails'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'

export default () => {
    return (
      <div className='nav'>
        <Routes>
          <Link to='/' className='logo'><h2>The Pokemon</h2></Link>
          <main>

            <Route path='/' exact component={Pokemons} />
            <Route path='/pokemon/:id' component={PokemonDetailsPage} />
          </main>
        </Routes>
      </div>
    )
};
