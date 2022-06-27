const OliveToken = artifacts.require("OliveToken");

module.exports = function (deployer) {
  deployer.deploy(OliveToken);
};