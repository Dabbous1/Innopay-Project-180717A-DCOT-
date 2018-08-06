import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Container from '../container/container';
import LoginForm from '../common/LoginForm';

class LoginScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Container>
				<LoginForm />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default LoginScreen;
