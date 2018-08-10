import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
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
			.post('http://192.168.178.22:4000/api/v1/sign_in', { email, pin })
			.then(x => {
				console.log(x.data);
				AsyncStorage.setItem('JWT', response.data.jwt);
				this.props.navigation.navigate('Recieve');
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
				<Header />
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input
								value={this.state.email}
								onChangeText={email => {
									this.setState({ email });
								}}
							/>
						</Item>
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input
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
