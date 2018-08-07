import React, { Component } from 'react'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { StyleSheet } from 'react-native'

import Container from '../container/container'
import RegistrationForm from './RegistrationForm'
import PinForm from './PinForm'

class ScreenTabA extends Component {
    render() {
        return (
            <Container>
                <RegistrationForm />
            </Container>
        )
    }
}

class ScreenTabB extends Component {
    render() {
        return (
            <Container>
                <PinForm />
            </Container>
        )
    }
}

const TabsAB = createMaterialTopTabNavigator({
    TabA: { screen: ScreenTabA, navigationOptions: { tabBarLabel: 'Address' } },
    TabB: { screen: ScreenTabB, navigationOptions: { tabBarLabel: 'Pin' } },
})

export default createStackNavigator({
    // For each screen that you can navigate to, create a new entry like this:
    ScreenTabAB: {
        screen: TabsAB,
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
