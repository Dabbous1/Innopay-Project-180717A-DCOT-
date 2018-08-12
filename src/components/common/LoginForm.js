import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import axios from 'axios';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			pin: ''
		};
	}

	onSubmit = () => {
		const { email, pin } = this.state;
		axios
			.post('http://0.0.0.0:4000/api/v1/sign_in', { email, pin })
			.then(response => {
				AsyncStorage.setItem('JWT', response.data.jwt);
				console.log(response.data.jwt);
				this.props.navigation.navigate('Profile');
			})
			.catch(error => {
				console.log(error);
			});
		// grab data from state & put in json object
		// send it to api
		// if response is successful save JWT to async storage
		// if not sucessful than show error
	};

	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
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
								value={this.state.pin}
								onChangeText={pin => {
									this.setState({ pin });
								}}
							/>
						</Item>
					</Form>
					<Button onPress={this.onSubmit}>
						<Text>Submit</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default LoginForm;
