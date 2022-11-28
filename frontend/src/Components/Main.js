import React from 'react'
import '../Styles/Navbar.css'
import moment from 'moment'
import { convertBytes } from './sizeBytes';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Main = () => {

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
        <div class="name">Upload Web3</div>
        <form >
          <div className="data">
            <label for="name">Description</label>
            <input type="text" placeholder='anything...' />
            <label for="name">Attach file</label>
            <input type='file' />

          </div>


          <div className="btn" id="btn2">
            <button>Upload</button>
          </div>
          <div className='his'><a>History</a></div>

        </form>
      </div>
    </div>
  )
}

export default Main