import React from "react";
import { View } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import RegistrationScreenC from 'screens/consumer/RegistrationScreenC';
import RecieveMenuScreenC from 'screens/consumer/RecieveMenuScreenC';
import RecieveTrackScreenC from 'screens/consumer/RecieveTrackScreenC';
import RecieveBarCodeScreenC from 'screens/consumer/RecieveBarCodeScreenC';
import RecieveStatusScreenC from 'screens/consumer/RecieveStatusScreenC';
import SendDetailsScreenC from 'screens/consumer/SendDetailsScreenC';
import SendAddressScreenC from 'screens/consumer/SendAddressScreenC';
import SendShipmentScreenC from 'screens/consumer/SendShipmentScreenC';
import SendOverviewScreenC from 'screens/consumer/SendOverviewScreenC';
import SendReceiptScreenC from 'screens/consumer/SendReceiptScreenC';
import ShipmentOverviewScreenC from 'screens/consumer/ShipmentOverviewScreenC';
import Header from 'common/consumer/HeaderC';



export const RegistrationStack = createStackNavigator({
  Registration: {
    screen: RegistrationScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
});


export const SendStack = createStackNavigator({
  SendDetails: {
    screen: SendDetailsScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  SendAddress: {
    screen: SendAddressScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  SendShipment: {
    screen: SendShipmentScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  SendOverview: {
    screen: SendOverviewScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  SendReceipt: {
    screen: SendReceiptScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
});

export const RecieveStack = createStackNavigator({
  RecieveMenu: {
    screen: RecieveMenuScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  RecieveTrack: {
    screen: RecieveTrackScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  RecieveBarCode: {
    screen: RecieveBarCodeScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
  Recieve: {
    screen: RecieveStatusScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
});

export const ViewStack = createStackNavigator({
  ShipmentOverview: {
    screen: ShipmentOverviewScreenC,
    navigationOptions: {
      header: <Header />
    },
  },
});

export const Tabs = createBottomTabNavigator({
  Profile: {
    screen: RecieveStack,
    navigationOptions: {
      tabBarLabel: 'Recieve',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Send: {
    screen: SendStack,
    navigationOptions: {
      tabBarLabel: 'Send',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Recieve: {
    screen: RegistrationStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  View: {
    screen: ViewStack,
    navigationOptions: {
      tabBarLabel: 'View',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

const Routes = createStackNavigator(
  {
    Registration: {
      screen: Tabs,
      navigationOptions: {
        header: <Header />
      }
    }
  },
);

export default Routes;
