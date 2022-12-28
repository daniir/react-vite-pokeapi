import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.png'
import routerLogo from '../assets/react-router-mark-color-inverted.svg'
import reduxLogo from '../assets/redux.svg'

export default function Footer() {
  return (
    <footer className="container-fluid p-5 rounded bg-dark">
      <div className="d-flex justify-content-between">
        <div>
          <img src={reactLogo} alt="reactLogo" height={50} width={50}/>
          <span className="text-white mx-2">+</span>
          <img src={viteLogo} alt="viteLogo" height={50} width={50} />
          <span className="text-white mx-2">+</span>
          <img src={routerLogo} alt="reactLogo" height={50} width={50}/>
          <span className="text-white mx-2">+</span>
          <img src={reduxLogo} alt="viteLogo" height={50} width={50} />
        </div>
        <div>
          <p className="text-white">Example app using <a className="link-warning" href="https://pokeapi.co/" target="_blank">PokeApi</a></p>
        </div>
      </div>
    </footer>
  )
};
