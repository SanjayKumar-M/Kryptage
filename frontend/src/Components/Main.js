import React, {Component} from 'react'
import '../Styles/Navbar.css'

import { ConnectButton } from "@rainbow-me/rainbowkit";

class Main extends Component {
render(){
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
        <form onSubmit={(event) => {
          event.preventDefault()
          const description = this.fileDescription.value
          this.props.uploadFile(description)
        }}  >

          <div className="data">
            <label for="name">Description</label>
            <input type="text" placeholder='anything...' ref={(input) => { this.fileDescription = input }} />
            <label for="name">Attach file</label>
            <input type='file' onChange={this.props.captureFile}/>

          </div>


          <div className="btn" id="btn2">
            <button type='submit'>Upload</button>
          </div>
          <div className='his'><a>History</a></div>

        </form>
      </div>
    </div >
  )
}}

export default Main