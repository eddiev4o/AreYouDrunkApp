import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection, Input, ButtonMain, Spinner} from './common';

class Results extends Component {
  onButtonPress() {
    Actions.start();
  }
  render() {
    return (
      <ImageBackground source={require('../../img/results.gif')}
      style={{width: '100%', height: '100%'}}>
      <View>
          <ButtonMain onPress={this.onButtonPress.bind(this)}>
            Try Again
          </ButtonMain>
      </View>
      </ImageBackground>

    );
  }
}

export default Results;
