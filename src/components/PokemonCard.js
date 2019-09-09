import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export const PokemonCard =  ({image, maxCP, maxHP, types, id, name}) => (
  <div key={id} className='pok-card'>
    <img src={image} alt={name} />
    <div className='hr' />
    <h3>{name}</h3>
    <div className='hr' />
    <div className='details'>
      <h4>CP: {maxCP}</h4>
      <h4>HP: {maxHP}</h4>
      <div className='types'>
        {
          types.map((val, index) => (
            <h5 key={index}>{val}</h5>
          ))
        }
      </div>
    </div>
    <Link className='more-link' to={'pokemon/' + id}>More Info...</Link>
  </div>
);

PokemonCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  maxCP: PropTypes.number.isRequired,
  maxHP: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};
