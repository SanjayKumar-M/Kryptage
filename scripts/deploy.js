const hardhat = require('hardhat')

const main = async () => {
  const Kryptage = await hardhat.ethers.getContractFactory('Kryptage')
  const Contract = await Kryptage.deploy()

  await Contract.deployed()
  console.log("Contract deployed to ", Contract.address)

}

(async ()=>{
  try{
    await main()
    process.exit(0)
  }
  catch(err){
    console.log(err)
    process.exit(1)
  }
}) ()

