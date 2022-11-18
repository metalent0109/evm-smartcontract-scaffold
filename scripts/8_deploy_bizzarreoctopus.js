/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const hre = require("hardhat");

async function main() {
  const BizzarreOctopus = await hre.ethers.getContractFactory("BizzarreOctopus");
  const contract = await BizzarreOctopus.deploy(
    'ipfs://QmfYWWia5mVaAVjGLWVVjBry3j7ZYmNJscLpA4zeM8caQv',
    '0xa5409ec958c83c3f309868babaca7c86dcb077c1'
  );

  await contract.deployed();
  console.log("BizzarreOctopus deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
