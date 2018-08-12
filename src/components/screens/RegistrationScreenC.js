import React from 'react';

import RegistrationForm from '../common/RegistrationForm';

export default class RegistrationScreenC extends React.Component {
	render() {
		return <RegistrationForm navigation={this.props.navigation} />;
	}
}
