import React from 'react'
import '../Styles/Navbar.css'

import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import { useState } from "react"
import { networks } from '../Utils/networks';
import { BallTriangle } from  'react-loader-spinner'


const Main = () => {
  const [file, setFile] = useState(null)
  const [imageURI, setImageURI] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const client = new Web3Storage({ token: process.env.REACT_APP_TOKEN })
 const [currentAccount, setCurrentAccount] = useState('');
 
  const handleFileChange = (e) => {
    e.preventDefault()
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }
  const uploadFile = async () => {
    setIsUploading(true)
    const fileToUpload = new File([file], file.name.split(" ").join(""), {
      type: file.type,
    })
    const cid = await client.put([fileToUpload], {
      name: file.name,
    })
    setImageURI(
      `https://${cid}.ipfs.w3s.link/${file.name.split(" ").join("")}`
    )
    setFile(null)
    setIsUploading(false)
  }

  const connectWallet = async () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask -> https://metamask.io/");
            return;
        }
        const account = await ethereum.request({ method: "eth_requestAccounts" });


        console.log("Connected", account[0]);
        setCurrentAccount(account[0]);
    } catch (error) {
        console.log(error)
    }
}



  return (

    <div >
      <nav>
        <div className='left'>
          <img src='https://raw.githubusercontent.com/SanjayKumar-M/Kryptage/main/frontend/src/Utils/Kryptage.png' alt='/' />
        </div>
        <div className='right btn' >
         
         
            <button  onClick={connectWallet}>Connect</button>
           
         
        </div>
      </nav>
      <div className='main'>
        <div class="name">Upload Web3</div>


        <div className="data">
          <label for="name">Description</label>
          <input type="text" placeholder='anything...' />
          {isUploading && <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />}
          <label for="name">Attach file</label>
          <input type={"file"} onChange={handleFileChange} />

        </div>


        <div className="btn" id="btn2">
          {file && (<button type='submit' onClick={uploadFile}>Upload</button>)}

        </div>
        <div className='his'><a href={History}>History</a></div>


        {imageURI.length > 0 && (
          <div className="link">
            <a href={imageURI}>Go To Your File</a>

          </div>
        )}
      </div>
    </div >
  )
}

export default Main