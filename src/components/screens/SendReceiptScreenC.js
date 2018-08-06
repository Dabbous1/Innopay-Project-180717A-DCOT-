import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// package Menu


export default class SendReceipt extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text> This is the Send Receipt Screen! </Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});