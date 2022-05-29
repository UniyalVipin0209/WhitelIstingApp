const { ethers} = require("hardhat");

async function main(){
    console.log("hre : ", ethers);
    const whiteListContract = await ethers.getContractFactory("WhiteList");
    console.log("whiteListContract ::", whiteListContract);
    const deployedWhiteListContract = await whiteListContract.deploy(10);
    
    await deployedWhiteListContract.deployed();

    console.log("WhiteListed Addresses", deployedWhiteListContract.address);
}

main().then(()=>{

   process.exit(0); 
}).catch((err)=> {

    console.error(err);
    process.exit(1);
}
);