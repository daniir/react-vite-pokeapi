import React from 'react'

export default function PokemonType({ types }) {

    return (
        <div className="card-text mb-2">
            {
                types.map(
                    (t, index) => (
                        <span 
                            className="badge rounded-pill text-bg-secondary m-1 text-capitalize"
                            key={index}>
                                {t.type.name}
                        </span>
                    )
                )
            }
        </div>
    )
}
