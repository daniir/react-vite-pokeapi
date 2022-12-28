import React from 'react'

export default function PokemonStats({ stats }) {
  return (
    <ul className="list-group">
        {
          stats.map(
            (p, index) => (
              <li className="list-group-item d-flex justify-content-between align-items-center text-capitalize" key={index}>
                {p.stat.name}
                <span className="badge bg-ligth text-dark rounded-pill">{p.base_stat}</span>
              </li>
            )
          )
        }
      </ul>
  )
}
