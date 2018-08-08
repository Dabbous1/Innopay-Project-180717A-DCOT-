import React, { Component } from 'react'
import {
    Container, Header, Left, Body, Right, Button, Icon, Title, Bottom,
} from 'native-base'

export default class HeaderMultipleIconExample extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body />
                    <Right>
                        <Button transparent>
                            <Icon name="more" />
                        </Button>
                    </Right>
                </Header>
            </Container>
        )
    }
}
