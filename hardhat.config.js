/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {},
      volta: {
         url: "https://volta-rpc.energyweb.org",
         accounts: [`0x65ae4a135354f3e9e8ac688f8e74e09f3d33b1ce9c083b90a43f16181d8dfc5a`],
         gas: 210000000,
         gasPrice: 800000000000,
      }
   },
}