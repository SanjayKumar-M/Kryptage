import React from 'react'
import '../Styles/Navbar.css'

import { ConnectButton } from "@rainbow-me/rainbowkit";
const Navbar = () => {

  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>RECENT</a></li>
          <li><ConnectButton /></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar