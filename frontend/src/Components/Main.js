import React from 'react'
import '../Styles/Navbar.css'
import moment from 'moment'
import { convertBytes } from './sizeBytes';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Main = () => {
  // onSubmit={(event) => {
  //   event.preventDefault()
  //   const description = this.fileDescription.value
  //   this.props.uploadFile(description)
  // }}
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
          <div class="data">
            <label for="name">Name</label>
            <input type="text" />
            

          </div>


          <div class="btn" id="btn2">
            <button>Upload</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Main