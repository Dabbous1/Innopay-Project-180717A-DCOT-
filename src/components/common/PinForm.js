import React, { Component } from 'react';
import { Container, Header, Item, Input, View } from 'native-base';

export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <View>
        <Item rounded>
          <Input placeholder='Rounded Textbox'/>
        </Item>
      </View>
    );
  }
}
