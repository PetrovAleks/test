import React, { Component } from "react";
import "./App.css";

import Service from "../service/servise";

export default class App extends Component {
	service = new Service();
	state = {
		balance: null,
		valueAddress: "0xA145ac099E3d2e9781C9c848249E2e6b256b030D",
	};

	updateBall = () => {
		const { valueAddress } = this.state;
		this.service.getBalance(valueAddress).then((bal) => {
			this.setState({
				balance: bal,
			});
		});
	};

	setInputValue = (e) => {
		const valueAddress = e.target.value;
		this.setState({
			valueAddress,
		});
	};

	componentDidMount() {
		const { valueAddress } = this.state;
		this.service.getBalance(valueAddress).then((bal) => {
			this.setState({
				balance: bal,
			});
		});
	}

	render() {
		return (
			<div className="wrapper">
				{<h1 className="bal">BAL:{this.state.balance}</h1>}
				<input
					onChange={this.setInputValue}
					className="input"
					placeholder="enter address"
				></input>
				<button onClick={this.updateBall} className="btn-ball">
					Update BAll
				</button>
			</div>
		);
	}
}
