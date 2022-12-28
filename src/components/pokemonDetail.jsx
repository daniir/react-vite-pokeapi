import React from 'react'
import { Link } from 'react-router-dom';
import PokemonStats from './pokemonStats';
import PokemonType from './pokemonType';

export default function PokemonDetail({ pokemon, specie }) {

  const { sprites, name, types, stats } = pokemon;
  const { color } = specie;

  return (
    <div className="card my-5 mx-auto" style={{ backgroundColor: `${color.name}`, width: "25rem" }}>
      <div className="row row-cols-sm-2">
        <img className="col img-fluid" src={`${sprites.front_default}`} alt={name} />
        <img className="col img-fluid" src={`${sprites.back_default}`} alt={name} />
      </div>
      <div className="card-body text-center" style={color.name === "white" || color.name === "yellow" ? { color: "black" } : { color: "white" }}>
        <h5 className="text-capitalize fw-bold">{name}</h5>
        <PokemonType types={types} />
        <PokemonStats stats={stats} />
      </div>
      <div className="card-footer">
        <Link className={color.name === "white" || color.name === "yellow" ? "btn btn-outline-dark btn-sm my-2" : "btn btn-outline-light btn-sm my-2"} to={"/"}>
          Back
        </Link>
      </div>
    </div>
  )
}
