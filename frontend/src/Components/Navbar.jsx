import { React, useState } from 'react'
import '../Navbar.css'
import { networks } from '../Utils/networks';

function Navbar() {
  const [currentAccount, setCurrentAccount] = useState('');

  const [network, setNetwork] = useState('');
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


  const checkIfWalletIsConnected = async () => {


    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install or activate Metamask wallet");
      return;
    } else {
      console.log("Haha", ethereum);

    }
    const account = await ethereum.request({ method: "eth_Accounts" });
    if (account.length !== 0) {
      const accounts = account[0];
      console.log('Found an authorized account:', accounts);
      setCurrentAccount(accounts);
    } else {
      console.log('No authorized account found');
    }

    const chainId = await ethereum.request({ method: 'eth_chainId' });
    setNetwork(networks[chainId]);

    ethereum.on('chainChanged', handleChainChanged);


    function handleChainChanged(_chainId) {
      window.location.reload();
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
          <li><button onClick={connectWallet}>CONNECT WALLET</button></li>
        </ul>
        <div className="right">
          
          {currentAccount ? <button>Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}</button>  : <button>Not connected </button> }
        </div>


      </div>
    </nav>
  )
}

export default Navbar