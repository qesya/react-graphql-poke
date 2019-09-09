import React from 'react'
import PropTypes from 'prop-types';

export const PokemonInfo =  ({image, maxCP, maxHP, types, id, name, evolutions}) => (
  <div key={id} className='pok-info'>
    <div>
        <div className='user-info'>
            <img src={image} alt={name} />

            <div className='user-detail'>
            <h1>Name: {name}</h1>
            <h2>CP: {maxCP}</h2>
            <h2>HP: {maxHP}</h2>
            <div className='types'>
                {
                    types.map((val, indx) => (
                    <h5 key={indx}>{val}</h5>
                ))
                }
            </div>
            </div>
        </div>
        {(evolutions !== null
            ? (
            <div className='evolution-container clear-fix'>
                <h1 className='clear-fix'>Evolutions</h1>
                {
                    evolutions.map((results) => (
                    <div key={results.number} className='pok-detail-card clear-fix'>
                    <img src={results.image} alt={results.name} />
                    <div className='pok-details-info'>
                        <h3>Name: {results.name}</h3>
                        <h3>CP: {results.maxCP}</h3>
                        <h3>HP: {results.maxHP}</h3>
                    </div>
                    <div className='types'>
                        {
                        results.types.map((val, indx) => (
                            <h5 key={indx}>{val}</h5>
                        ))
                        }
                    </div>
                    </div>
                ))
                }
            </div>
            ) : '')}
        </div>
  </div>
);

PokemonInfo.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  maxCP: PropTypes.number.isRequired,
  maxHP: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  evolutions: PropTypes.object.isRequired
};
