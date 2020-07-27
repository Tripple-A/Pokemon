import React from 'react';
import { NavLink } from 'react-router-dom';

const Details = ({ details }) => {
  if (Object.keys(details).length > 0) {
    return (
      <div className="detailsDiv text-left row">
        <div className="col-md-8">
        <h6>Name: {details.forms[0].name}</h6>
        <h6>Weight: {details.weight}</h6>
        <h6>Height: {details.height}</h6>
        </div>
        <div className="col-md-4">
        <img 
        src={details.sprites.front_default}
        className="pokeImg" />
        </div>
        
      </div>
    );
  } else {
    return(
      <div>
        <h6>
          I am here to display the pokemons you search for. Please keep me busy.
        </h6>
      </div>
    )
  }
  return null;
};

export default Details;
