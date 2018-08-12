import React from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';

// Profile

export default class ProfileScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text> This is your Profile Screen! </Text>
				<Button onPress={this.deleteUser} title="Log Out" />
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
