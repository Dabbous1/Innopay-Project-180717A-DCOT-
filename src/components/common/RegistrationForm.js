import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import axios from 'axios';
import { JWT } from 'App';

class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			pin: '',
			role: 'Consumer',
			pin_confirmation: ''
		};
	}

	onSubmit = () => {
		const { name, email, pin, role, pin_confirmation } = this.state;
		axios
			.post('http://0.0.0.0:4000/api/v1/sign_up', {
				user: {
					name,
					email,
					pin,
					role,
					pin_confirmation
				}
			})
			.then(response => {
				AsyncStorage.setItem('JWT', response.data.jwt);
				console.log(response.data.jwt);
				this.props.navigation.navigate('Profile');
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<View>
				<Form>
					<Item floatingLabel>
						<Label>Name</Label>
						<Input
							value={this.state.name}
							onChangeText={name => {
								this.setState({ name });
							}}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Email</Label>
						<Input
							autoCapitalize="none"
							value={this.state.email}
							onChangeText={email => {
								this.setState({ email });
							}}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Pin</Label>
						<Input
							keyboardType={'number-pad'}
							secureTextEntry
							value={this.state.pin}
							onChangeText={pin => {
								this.setState({ pin });
							}}
						/>
					</Item>
					<Item floatingLabel last>
						<Label>Pin Confirmation</Label>
						<Input
							keyboardType={'number-pad'}
							secureTextEntry
							value={this.state.pin_confirmation}
							onChangeText={pin_confirmation => {
								this.setState({ pin_confirmation });
							}}
						/>
					</Item>
				</Form>
				<Button onPress={this.onSubmit}>
					<Text> Submit</Text>
				</Button>
			</View>
		);
	}
}

export default RegistrationForm;
