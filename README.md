# Smart Contract Compile & Deploy

```
$npx hardhat clean

$ npx hardhat compile

$ npx hardhat run --network rinkeby ./scripts/0_deploy_contract.js

$ npx hardhat verify --network rinkeby [Contract Address] [Constructor Params]
```
npx hardhat run --network mainnet ./scripts/8_deploy_doodle.js