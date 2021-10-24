# Getting Started with React Solidity App

## Deploying The Smart Contracts

To deploy the smart contracts, run local blockchain (e.g  Ganache) and run tthe following commands:
`cd smart_contracts` and `truffle deploy`

## Launching the UI

### Configuring .env

For local usage, .env needs to have the following variables:
`REACT_APP_CHAIN_ID=Localhost` 
`REACT_APP_CHAIN_URL=http://localhost:7545`

After that in the root directory, run:
 `yarn start`
