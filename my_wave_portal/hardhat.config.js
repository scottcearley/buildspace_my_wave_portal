require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/vJI_jEn4nXVjbEXzVA8yUpGrpmYysgQo",
      accounts: ["0x8e20037FaAF55322D15d2e53D90ef4d58A6259EA"]
    },
  },
};