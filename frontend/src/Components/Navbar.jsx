import React from 'react'
import '../Navbar.css'


function Navbar() {
  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>Recent</a></li>
          <li><button>CONNECT WALLET</button></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar