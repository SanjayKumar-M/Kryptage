import React from 'react'
import '../Navbar.css'
import { ethers } from 'ethers'
function Navbar() {

  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>Recent</a></li>
          <li></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar