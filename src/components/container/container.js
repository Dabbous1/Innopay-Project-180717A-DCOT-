import React from 'react'
import { View, StyleSheet } from 'react-native'

const container = props => (
    <View style={styles.container}>
        {props.children}
    </View>
)

export default container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
})
