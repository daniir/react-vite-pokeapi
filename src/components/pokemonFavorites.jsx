import React from 'react'
import { useSelector } from 'react-redux'
import PokemonList from './PokemonList';

export default function PokemonFavorites() {

    const pokemonsState = useSelector((state) => state.myPokemons.myPokemons);

    return (
        <div>
            <h2 className="text-center text-light fw-bold">
                Favorite list
            </h2>
            <hr />
            <br />
            {
                pokemonsState.length >= 1
                    ? (
                        <PokemonList pokemonsState={pokemonsState} />
                    )
                    : (
                        <p className="text-warning text-center fw-bold m-5">No pokemons added yet</p>
                    )
            }
        </div>
    )
}
