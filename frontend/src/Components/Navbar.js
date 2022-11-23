import React from 'react'
import '../Styles/Navbar.css'
import Button from '@mui/material/Button';

const Navbar = () => {
  const connectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
      try {
        const address = await window.ethereum.enable(); //connect Metamask
        const obj = {
          connectedStatus: true,
          status: "",
          address: address
        }
        return obj;

      } catch (error) {
        return {
          connectedStatus: false,
          status: "🦊 Connect to Metamask using the button on the top right."
        }
      }

    } else {
      return {
        connectedStatus: false,
        status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
      }
    }
  };
  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>RECENT</a></li>
          <li><Button onClick={connectWallet}variant="contained" >Connect</Button></li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar