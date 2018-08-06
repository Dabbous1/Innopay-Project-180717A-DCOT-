import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Settings extends React.Component {
  render() {
  return (
    <View style={styles.container}>
       <Text style={styles.paragraph}> This is the Setting Screen! </Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});