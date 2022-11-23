import React from 'react'
import '../Styles/Navbar.css'
import Button from '@mui/material/Button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {


  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>RECENT</a></li>
          <li><ConnectButton
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
          /></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar