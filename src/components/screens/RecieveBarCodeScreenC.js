import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// package Menu


export default class RecieveBarCode extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text> This is the Recieve Bar Code Screen! </Text>
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