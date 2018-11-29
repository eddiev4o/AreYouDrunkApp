import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';

class Game2 extends Component {

  onButtonPress() {
    Actions.game3();
  }

  render() {
    return(
      <View style={{backgroundColor: '#23272A'}}>
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Game 3
        </Button>
      </CardSection>
      </View>
    );
  }
}

export default Game2;
