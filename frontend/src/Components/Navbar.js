import React from 'react'
import '../Styles/Navbar.css'
import '../Styles/Main.css'

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {

  return (

    <>
      <nav>
        <div className='left'>
          <img src='https://raw.githubusercontent.com/SanjayKumar-M/Kryptage/main/frontend/src/Utils/Kryptage.png' />
        </div>
        <div className='right'>
          <ul>

            <li><ConnectButton /></li>
          </ul>


        </div>

      </nav>
      <div class="container">
        <div class="name">Register Now</div>
        <form action="#">

        </form>
      </div>
    </>
  )
}

export default Navbar