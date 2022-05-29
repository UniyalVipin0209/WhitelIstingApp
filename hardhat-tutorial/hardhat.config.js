require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path:".env"});

const ROPSTEN_ALCHEMY_API_KEY_URL = process.env.ROPSTEN_ALCHEMY_API_KEY_URL;
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: ROPSTEN_ALCHEMY_API_KEY_URL,
      accounts:[ROPSTEN_PRIVATE_KEY],
    }

  },
};
