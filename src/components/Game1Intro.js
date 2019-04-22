import React, {Component, PureComponent} from 'react';
import { TouchableOpacity, View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game1Intro extends PureComponent {

onButtonPress() {
 Actions.game1();
}

  render() {
      var pics = [
      require('../../img/BlueBlue.png'),
      require('../../img/true.png'),
      require('../../img/BlueRed.png'),
      require('../../img/false.png')];
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                <Text style={styles.textStyle2}> COLOR MATCHES THE TEXT? {"\n"} TAP
                  <Text style={{color:'green'}}> TRUE </Text>
                OR
                  <Text style={{color: 'red'}}> FALSE </Text>
                </Text>
                  <View style={styles.gameContainer}>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={pics[0]} style={{ width: 128, height: 64, marginRight: 50 }} />
                    <Image source={pics[1]} style={{ width: 96, height: 96 }} />
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={pics[2]} style={{ width: 128, height: 64, marginRight: 50 }} />
                    <Image source={pics[3]} style={{ width: 96, height: 96}} />
                    </View>
                  </View>
                  <CardSectionBlue>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      I'm Ready
                    </Button>
                  </CardSectionBlue>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#164170"
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 80,
    marginBottom: 100,
    marginRight: 25,
    marginLeft: 25
  },
  textStyle2 : {
    fontSize: 32,
    color: '#E8971C',
    textAlign: 'center',
    marginTop: 20
  }
});

export default Game1Intro;
