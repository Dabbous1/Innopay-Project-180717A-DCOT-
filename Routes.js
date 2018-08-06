import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import WelcomeScreenC from 'screens/WelcomeScreenC';
import RegistrationScreenC from 'screens/RegistrationScreenC';
import LoginScreenC from 'screens/LoginScreenC';
import RecieveMenuScreenC from 'screens/RecieveMenuScreenC';
import RecieveTrackScreenC from 'screens/RecieveTrackScreenC';
import RecieveBarCodeScreenC from 'screens/RecieveBarCodeScreenC';
import RecieveStatusScreenC from 'screens/RecieveStatusScreenC';
import SendDetailsScreenC from 'screens/SendDetailsScreenC';
import SendAddressScreenC from 'screens/SendAddressScreenC';
import SendShipmentScreenC from 'screens/SendShipmentScreenC';
import SendOverviewScreenC from 'screens/SendOverviewScreenC';
import SendReceiptScreenC from 'screens/SendReceiptScreenC';
import SettingsScreenC from 'screens/SettingsScreenC';
import Header from 'common/HeaderC';

export const RegistrationStack = createStackNavigator({
	Welcome: {
		screen: WelcomeScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	Login: {
		screen: LoginScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	Registration: {
		screen: RegistrationScreenC,
		navigationOptions: {
			header: <Header />
		}
	}
});

export const SendStack = createStackNavigator({
	SendDetails: {
		screen: SendDetailsScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	SendAddress: {
		screen: SendAddressScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	SendShipment: {
		screen: SendShipmentScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	SendOverview: {
		screen: SendOverviewScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	SendReceipt: {
		screen: SendReceiptScreenC,
		navigationOptions: {
			header: <Header />
		}
	}
});

export const RecieveStack = createStackNavigator({
	RecieveMenu: {
		screen: RecieveMenuScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	RecieveTrack: {
		screen: RecieveTrackScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	RecieveBarCode: {
		screen: RecieveBarCodeScreenC,
		navigationOptions: {
			header: <Header />
		}
	},
	RecieveStatus: {
		screen: RecieveStatusScreenC,
		navigationOptions: {
			header: <Header />
		}
	}
});

export const SettingsStack = createStackNavigator({
	Settings: {
		screen: SettingsScreenC,
		navigationOptions: {
			header: <Header />
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
		screen: RegistrationStack,
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

const Routes = createStackNavigator({
	Welcome: {
		screen: Tabs,
		navigationOptions: {
			header: <Header />
		}
	}
});

export default Routes;
