import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// package Menu


export default class SendOverview extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text> This is the Send Overview Screen! </Text>
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