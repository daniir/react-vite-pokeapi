import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFavorites } from '../features/myPokemos/pokemonSlices'

export default function PokemonList({ pokemonsState }) {

    const dispatch = useDispatch();

    return (
        <>
            {
                pokemonsState.map(
                    p => (
                        <div key={p.id} 
                        className="border border-1 rounded alert alert-light d-flex align-items-center" 
                        role="alert">
                            <img src={p.image} alt={p.name} height={50} width={50} />
                            <p className="fw-bold text-capitalize mx-auto">{p.name}</p>
                            <button 
                                type="button" 
                                onClick={() => dispatch(removeFavorites(p.id))}
                                className="btn-close">
                            </button>
                        </div>
                    )
                )
            }
        </>
    )
};
