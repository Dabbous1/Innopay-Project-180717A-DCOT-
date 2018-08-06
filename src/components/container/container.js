import React from 'react'
import { View, StyleSheet } from 'react-native'

const container = props => (
    <View style={styles.container}>
        {props.children}
    </View>
)
StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default container