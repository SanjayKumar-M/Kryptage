import React from 'react'
import '../Navbar.css'
import "https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.1/web3.min.js"

function Navbar() {

  const Connect = async() =>{
    if(window.ethereum){
      await window.ethereum.request({method: "eth_requestAccounts" })
      window.web3(window.ethereum);
  
 } else {
  console.log("No wallet");
 }

    }
  
  return (
    <nav>
      <div className='left'>
        Kryptage
      </div>
      <div className='right'>
        <ul>
          <li> <a href='/'>Recent</a></li>
          <li><button onClick={Connect} >CONNECT WALLET</button> </li>
        </ul>


      </div>
    </nav>
  )
}

export default Navbar