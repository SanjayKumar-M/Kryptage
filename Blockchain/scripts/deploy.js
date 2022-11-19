const hardhat = require("hardhat")

const main = async () =>{
  const Kryptage = await hardhat.ethers.getContractFactory('Kryptage');
  const Contract = await Kryptage.deploy()
  await Contract.deployed(); 
  console.log(`Contract is deployed successfully to ${Contract.address}`)

}

(async() =>{
  try{
    await main()
    process.exit(0)
  }
  catch(err){
    await err
    process.exit(1)
  }
})()
