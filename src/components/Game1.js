import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';

class Game1 extends Component {

onButtonPress() {
  Actions.game2();
}

  render() {
    return(
      <View style={{backgroundColor: '#23272A'}}>
      <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Game 2
        </Button>
      </CardSection>
      </View>
    );
  }
}

export default Game1;
