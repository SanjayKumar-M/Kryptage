import React from 'react'
import '../Styles/Navbar.css'

import { ConnectButton } from "@rainbow-me/rainbowkit";
const Navbar = () => {

  return (
    <nav>
      <div className='left'>
        <img src='https://raw.githubusercontent.com/SanjayKumar-M/Kryptage/main/frontend/src/Utils/Kryptage.png'/>
      </div>
      <div className='right'>
        <ul>
         
          <li><ConnectButton /></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar