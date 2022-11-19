const hardhat = require('hardhat')

const mainContract = async() =>{
  const Kryptage = await hardhat.ethers.getContractFactory('Kryptage')
  const Contract = await Kryptage.deploy();
  await Contract.deployed();

  console.log(`Finally The Contract is deployed successfully to ${Contract.address}`)

}

mainContract()