import React from 'react';
import { View } from 'react-native';
import App from 'App';
import Tabmenu from 'common/consumer/TabsC';
import Header from 'common/consumer/HeaderC';

export default class RegistrationScreen extends React.Component {
static navigationOptions = {
  header: <Header />
};
render() {
return (
    <Tabmenu />
  );
 }
}
