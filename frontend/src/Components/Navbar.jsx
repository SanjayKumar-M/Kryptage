import React from 'react'
import '../Styles/Navbar.css'
import Button from '@mui/material/Button';

const Navbar=()=> {
  

  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>RECENT</a></li>
          <li><Button variant="contained">CONNECT WALLET</Button></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar