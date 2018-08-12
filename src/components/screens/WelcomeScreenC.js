import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// import Container from '../container/container'

class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text> Welcome to Innopay's Consumer app! </Text>
				<Button
					onPress={() => this.props.navigation.navigate('Login')}
					title="Login as existing User"
					color="#3B5998"
				/>
				<Button
					onPress={() => this.props.navigation.navigate('Registration')}
					title="Register as a new user"
					color="#dd4b39"
				/>
			</View>
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

export default WelcomeScreen;
