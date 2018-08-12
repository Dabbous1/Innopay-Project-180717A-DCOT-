/**
 * @providesModule App
 */
import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Tabs, WelcomeStack } from './Routes';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAuthenticated: false
		};
	}

	componentDidMount() {
		const JWT = AsyncStorage.getItem('JWT');
		if (JWT) {
			this.setState({ isAuthenticated: false });
		} else {
			this.setState({ isAuthenticated: false });
		}
		console.log(JWT);
	}

	render() {
		return !this.state.isAuthenticated ? <WelcomeStack navigation={this.props.navigation} /> : <Tabs />;
		// return <WelcomeStack />;
	}
}
