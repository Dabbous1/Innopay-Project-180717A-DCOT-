import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class PickerWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select Options"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Registration" value="key0" />
              <Picker.Item label="Recieve" value="key1" />
              <Picker.Item label="Send" value="key2" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
