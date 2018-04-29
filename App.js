import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Item,
  Input,
  Icon,
  Spinner,
  Button,
  Text,
} from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>GitHub Search Repositories</Title>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Item last>
              <Icon active name='search' />
              <Input
                placeholder="Buscar palavra chave"
                //value={}
                //onChangetext={}
              />
            </Item>
          </Form>
          <Button 
            block 
            style={{ marginTop: 10 }} 
            //onPress={}
          >
            <Text>Buscar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}