import OGEthlizards from "constant/abis/OGEthlizards.json";

export const getCoinbase = async () => {
  //  Get Accounts
  const accounts = await window.web3Object.eth.getAccounts();
  return accounts.length > 0 ? accounts[0] : "";
};
// Function to get Contract
export const getContract = async (key) => {
  return 0;
};
