import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Send Shipment

export default class SendShipment extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {' '}
This is the Send Shipment Screen!
                    {' '}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
