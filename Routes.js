import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import WelcomeScreenC from './src/components/screens/WelcomeScreenC';
import RegistrationScreenC from './src/components/screens/RegistrationScreenC';
import LoginScreenC from './src/components/screens/LoginScreenC';
import ProfileScreenC from './src/components/screens/ProfileScreenC';
import RecieveMenuScreenC from './src/components/screens/RecieveMenuScreenC';
import RecieveTrackScreenC from './src/components/screens/RecieveTrackScreenC';
import RecieveQRCodeScreenC from './src/components/screens/RecieveQRCodeScreenC';
import RecieveStatusScreenC from './src/components/screens/RecieveStatusScreenC';
import SendDetailsScreenC from './src/components/screens/SendDetailsScreenC';
import SendAddressScreenC from './src/components/screens/SendAddressScreenC';
import SendShipmentScreenC from './src/components/screens/SendShipmentScreenC';
import SendOverviewScreenC from './src/components/screens/SendOverviewScreenC';
import SendReceiptScreenC from './src/components/screens/SendReceiptScreenC';
import SettingsScreenC from './src/components/screens/SettingsScreenC';

export const WelcomeStack = createStackNavigator({
	Welcome: {
		screen: WelcomeScreenC,
		navigationOptions: {
			header: null
		}
	},
	Login: {
		screen: LoginScreenC,
		navigationOptions: {
			headerTitle: 'login'
		}
	},
	Registration: {
		screen: RegistrationScreenC,
		navigationOptions: {
			headerTitle: 'registration'
		}
	}
});

const SendStack = createStackNavigator({
	SendDetails: {
		screen: SendDetailsScreenC,
		navigationOptions: {
			headerTitle: 'Enter Details'
		}
	},
	SendAddress: {
		screen: SendAddressScreenC,
		navigationOptions: {
			headerTitle: 'Shipment Address'
		}
	},
	SendShipment: {
		screen: SendShipmentScreenC,
		navigationOptions: {
			headerTitle: 'Send Shipment'
		}
	},
	SendOverview: {
		screen: SendOverviewScreenC,
		navigationOptions: {
			headerTitle: 'Shipment Overview'
		}
	},
	SendReceipt: {
		screen: SendReceiptScreenC,
		navigationOptions: {
			headerTitle: 'Shipment Details'
		}
	}
});

const RecieveStack = createStackNavigator({
	RecieveMenu: {
		screen: RecieveMenuScreenC,
		navigationOptions: {
			headerTitle: 'Incoming Shipments'
		}
	},
	RecieveTrack: {
		screen: RecieveTrackScreenC,
		navigationOptions: {
			headerTitle: 'Track Shipment'
		}
	},
	RecieveQRCode: {
		screen: RecieveQRCodeScreenC,
		navigationOptions: {
			headerTitle: 'Enter Barcode'
		}
	},
	RecieveStatus: {
		screen: RecieveStatusScreenC,
		navigationOptions: {
			headerTitle: 'Shipment Status'
		}
	}
});

const ProfileStack = createStackNavigator({
	Settings: {
		screen: ProfileScreenC,
		navigationOptions: {
			headerTitle: 'Profile'
		}
	}
});

const SettingsStack = createStackNavigator({
	Settings: {
		screen: SettingsScreenC,
		navigationOptions: {
			headerTitle: 'Settings'
		}
	}
});

export const Tabs = createBottomTabNavigator({
	Recieve: {
		screen: RecieveStack,
		navigationOptions: {
			tabBarLabel: 'Recieve',
			tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
		}
	},
	Send: {
		screen: SendStack,
		navigationOptions: {
			tabBarLabel: 'Send',
			tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
		}
	},
	Profile: {
		screen: ProfileStack,
		navigationOptions: {
			tabBarLabel: 'Profile',
			tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
		}
	},
	View: {
		screen: SettingsStack,
		navigationOptions: {
			tabBarLabel: 'View',
			tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
		}
	}
});
