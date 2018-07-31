import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Bottom } from 'native-base';
import DropDownMenu from 'common/consumer/DropDownMenuC';


export default class HeaderMultipleIconExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>

          </Left>
          <Body>
            <DropDownMenu />
          </Body>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
