import React from 'react'
import {
    View, Text, StyleSheet, Constants,
} from 'react-native'

// package Menu

export default class SendAddress extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    {' '}
This is the Send Address Screen!
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
