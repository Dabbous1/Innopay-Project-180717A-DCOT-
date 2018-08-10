import React, { Component } from 'react';

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
				<LoginForm navigation={this.props.navigation} />
			</Container>
		);
	}
}

export default LoginScreen;
