import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';

class Game3 extends Component {

  onButtonPress() {
    Actions.results();
  }

  render() {
    return(
      <View style={{backgroundColor: '#23272A'}}>
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Finish
        </Button>
      </CardSection>
      </View>
    );
  }
}

export default Game3;
