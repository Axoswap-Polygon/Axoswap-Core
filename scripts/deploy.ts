import { ethers,run } from "hardhat";
import "@nomiclabs/hardhat-etherscan";

async function main() {
  
  const delay = (ms: number | undefined) => new Promise(res => setTimeout(res, ms));
 const Router = await ethers.getContractFactory("UniswapV2Router02");
 const router = await Router.deploy("0x4A2567DF253DBA236CA7F6549C3434236a7CAfE8", "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270");

  await router.deployed();

  console.log("UniswapV2Router deployed to", router.address);
  await delay(5000);
  run("verify:verify", {
    address: router.address,
    constructorArguments: ['0x4A2567DF253DBA236CA7F6549C3434236a7CAfE8', '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270']
  }
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
