import React, { Component } from 'react';
import { Form, Item, Input, Label } from 'native-base';

class LoginForm  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: null, 
            Password: null, 
          };
    }
    render() {
        return (
    <View>
        <Form>
        <Item floatingLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
    </View>
        );
    }
}

export default LoginForm 