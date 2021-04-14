require('dotenv').config();

const HDWalletProvider = require("@truffle/hdwallet-provider");

const {
  TESTNET_PK,
  BSCSCAN_API_TOKEN
} = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    testnet: {
      provider: () =>
          new HDWalletProvider({
            privateKeys: [TESTNET_PK],
            providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
            numberOfAddresses: 1,
            shareNonce: true,
            derivationPath: "m/44'/60'/0'/0/"
          }),
      host: "https://data-seed-prebsc-1-s1.binance.org",
      port: 8545,
      network_id: "97",
      gas : 3000000,
      gasPrice: 502000000000,
    },
    mainnet: {
      host: "https://bsc-dataseed.binance.org/",
      port: 80,
      network_id: "56"
    }
  },

  compilers: {
    solc: {
      version: "0.6.12"
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    // etherscan: BSCSCAN_API_TOKEN,
    bscscan: BSCSCAN_API_TOKEN
  }
};
