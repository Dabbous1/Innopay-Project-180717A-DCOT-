import React, { Component } from 'react'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'

import Container from '../container/container'

class TabNavigator extends Component {
    render() {
        return (
            <Container>
                <TabA />
                <TabB />
            </Container>
        )
    }
}
