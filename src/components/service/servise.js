import Web3 from "web3";

class Service {
	apiKey = "5WRA1HDZ413YKABS2GDIQS7Z8WH7H7BNTP";
	rpcURL = "https://mainnet.infura.io/v3/b3481ded389540249adbb7c00ca8aa38";

	web3 = new Web3(new Web3.providers.HttpProvider(this.rpcURL));

	getBalance = async (address) => {
		let bal;
		await this.web3.eth.getBalance(address, (err, wei) => {
			bal = this.web3.utils.fromWei(wei, "ether");
		});
		console.log(bal);
		return bal;
	};
}

export default Service;
