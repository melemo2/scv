
import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from "./Chart.jsx";
import {getData} from "./Data.jsx";

export default class App extends React.Component {
	componentDidMount() {
		getData().then(data => {
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return (<div>Loading...</div>);
		}
    console.log(this.state.data);
		return (<Chart data={this.state.data} record="df"/>);
	}
}

