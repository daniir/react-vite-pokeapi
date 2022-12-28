import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import logo from '../assets/pokeapi.png'

export default function NavBar() {

  const pokemonsState = useSelector((state) => state.myPokemons.myPokemons);

  let activeStyle = {
    backgroundColor: "#a83240",
    color: "white",
  };

  return (
    <nav className="nav bg-danger">
      <NavLink to={"/"}>
        <img src={logo} alt="logo" height={45} width={105} />
      </NavLink>
      <NavLink className="mx-5 text-white p-3 text-decoration-none" 
        style={({isActive}) => isActive ? activeStyle : undefined}
        to="favorites">
        Favorites {
          pokemonsState.length > 0 
          ? (<span className="badge text-bg-light">{pokemonsState.length}</span>)
          : null
        }
      </NavLink>
    </nav>
  )
}
