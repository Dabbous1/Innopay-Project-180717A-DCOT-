import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';
// package Menu


export default class ShipmentOverview extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text style={styles.paragraph}> This is the OverView of all Incoming and Outgoing Shipments! </Text>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});
