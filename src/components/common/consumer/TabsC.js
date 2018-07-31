import React, { Component } from 'react';
import { TabNavigator, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { View, StyleSheet} from 'react-native';
import { Content, Form, Item, Input, Label } from 'native-base';
import Header from 'common/consumer/HeaderC';
import PinForm from 'common/PinForm';


class ScreenTabA extends Component {
  render() {
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
           </Item>
        </Form>
      </View>
    );
  }
}

class ScreenTabB extends Component {
  render() {
    return (
    <View>
      <PinForm />
    </View>
    );
  }
}

const TabsAB = createMaterialTopTabNavigator({
  TabA: { screen: ScreenTabA, navigationOptions: { tabBarLabel: 'Address' } },
  TabB: { screen: ScreenTabB, navigationOptions: { tabBarLabel: 'Pin' } },
});

export default createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  ScreenTabAB: {
    screen: TabsAB,
  },
})
