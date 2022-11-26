import React from 'react'
import '../Styles/Navbar.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from '@mui/material/Button';
const Main = () => {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (

    <div >
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
      <div className='main'>
      </div>
    </div>
  )
}

export default Main