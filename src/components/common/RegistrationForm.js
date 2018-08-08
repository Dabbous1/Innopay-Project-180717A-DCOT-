import React, { Component } from 'react'
import { View } from 'react-native'
import {
    Form, Item, Input, Label,
} from 'native-base'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            street: null,
            zipCode: null,
            city: null,
        }
    }

    render() {
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Label>
Name
                        </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>
Street
                        </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>
Zip Code
                        </Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>
City
                        </Label>
                        <Input />
                    </Item>
                </Form>
            </View>
        )
    }
}

export default RegistrationForm
