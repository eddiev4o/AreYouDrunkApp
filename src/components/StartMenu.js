import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {Card, CardSection, Input, ButtonMain, Spinner} from './common';

class StartMenu extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/start.gif')}
      style={{width: '100%', height: '100%'}}>
      <View>
          <ButtonMain>
            Start
          </ButtonMain>
      </View>
      </ImageBackground>

    );
  }
}

export default StartMenu;
