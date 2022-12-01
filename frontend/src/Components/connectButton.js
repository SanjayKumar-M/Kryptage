// import React from 'react'
// import { useEffect, useState } from "react";
// import { ethers } from 'ethers';
// import Button from 'mui-button';
// import { networks } from '../Utils/networks';
// const ConnectButton = () =>{
//     const [setCurrentAccount] = useState('');
 
//     const [setNetwork] = useState('');
    
//     const connectWallet = async () => {
//         try {
//             const { ethereum } = window;

//             if (!ethereum) {
//                 alert("Get MetaMask -> https://metamask.io/");
//                 return;
//             }
//             const account = await ethereum.request({ method: "eth_requestAccounts" });


//             console.log("Connected", account[0]);
//             setCurrentAccount(account[0]);
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     const checkIfWalletIsConnected = async () => {


//         const { ethereum } = window;
//         if (!ethereum) {
//             alert("Please install or activate Metamask wallet");
//             return;
//         } else {
//             console.log("Haha", ethereum);

//         }
//         const account = await ethereum.request({ method: "eth_Accounts" });
//         if (account.length !== 0) {
//             const accounts = account[0];
//             console.log('Found an authorized account:', accounts);
//             setCurrentAccount(accounts);
//         } else {
//             console.log('No authorized account found');
//         }

//         const chainId = await ethereum.request({ method: 'eth_chainId' });
//         setNetwork(networks[chainId]);

//         ethereum.on('chainChanged', handleChainChanged);


//         function handleChainChanged(_chainId) {
//             window.location.reload();
//         }


//     }


//     return (
//         <div><Button>Connect</Button></div>
//     )
// }

// export default ConnectButton