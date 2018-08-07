import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Profile

export default class RecieveBarCode extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {' '}
This is your Profile Screen!
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
