import React, {Component, PureComponent} from 'react';
import { View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game1 extends Component {

onButtonPress() {
 Actions.game2();
}

  render() {
      return (
              <View style= {{flex: 1, backgroundColor: 'blue'}}>
                  <View style = {{flex: 2, backgroundColor:'#164170'}}>
                  <Image source={require('../../img/RedRed.png')} style={{width: 128, height: 64}} />
                  </View>
                  <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      Game 2
                    </Button>
                  </CardSection>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "darkblue",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});

export default Game1;
