import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorites, removeFavorites } from '../features/myPokemos/pokemonSlices'
import PokemonType from './pokemonType'
import { useEffect } from 'react'

export default function PokemonCard({ pokemon }) {

    const { id, name, sprites, types } = pokemon;
    const dispatch = useDispatch();
    const pokemonsState = useSelector((state) => state.myPokemons.myPokemons);

    useEffect(() => {}, [pokemonsState])

    const handleFavorites = (pokemonData) => {
        const { id, name, sprites } = pokemonData;
        const foundFavorite = pokemonsState.find(p => p.id === id);
        if (!foundFavorite) {
            const payload = {
                id,
                name,
                image: sprites.front_default,
                active: true,
            };
            dispatch(addFavorites(payload));
        } else {
            dispatch(removeFavorites(id));
        };
    };

    return (
        <div className="col">
            <div className="card">
                <img
                    height={150}
                    width={200}
                    src={sprites.other.dream_world.front_default}
                    className="rounded my-2 mx-auto d-block"
                    alt={name} />
                <div className="card-body text-center">
                    <h5 className="card-title text-capitalize fw-bold">{name}</h5>
                    <PokemonType types={types} />
                    <Link
                        className='badge rounded-pill text-bg-dark text-decoration-none'
                        to={`/detail/${id}`}>view stats</Link>
                </div>
                <div className="card-footer">
                    <button
                        className={`btn btn-link text-decoration-none ${pokemonsState.find(p => p.id === id) ? "link-danger": "link-warning"}`}
                        onClick={() => handleFavorites(pokemon)}>
                        <span>
                            <i className={`${pokemonsState.find(p => p.id === id) ? "bi bi-star-fill" : "bi bi-star"} mx-2`}>
                                {pokemonsState.find(p => p.id === id) ? "Remove from favorite" : "Add to favorite"}
                            </i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
