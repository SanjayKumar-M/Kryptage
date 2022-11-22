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
          <li><Button variant="contained">Contained</Button></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar