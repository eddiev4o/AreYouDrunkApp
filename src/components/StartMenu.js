import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection, Input, ButtonMain, Spinner} from './common';

class StartMenu extends Component {
  onButtonPress() {
    Actions.form();
  }
  render() {
    return (
      <ImageBackground source={require('../../img/start.gif')}
      style={{width: '100%', height: '100%'}}>
      <View>
          <ButtonMain onPress={this.onButtonPress.bind(this)}>
            Start
          </ButtonMain>
      </View>
      </ImageBackground>

    );
  }
}

export default StartMenu;
