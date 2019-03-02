import React, {Component, PureComponent} from 'react';
import { View, Text, AppRegistry, StyleSheet, Dimensions } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game3 extends PureComponent {
constructor () {
  super();
  this.state = {
    x: WIDTH / 2 - RADIUS,
    y: HEIGHT / 2 - RADIUS,
    timePassed3: false
  };
}


updateHandler = ({ touches, screen, time }) => {
  let move = touches.find(x => x.type === "move");
  if (move) {
    this.setState({
      x: this.state.x + move.delta.pageX,
      y: this.state.y + move.delta.pageY
    });
  }
};
onButtonPress() {
 Actions.results();
}
// setTimePassed() {
//   this.setState({timePassed3: true});
//   Actions.results();
// }



  render() {
  //   if (!this.state.timePassed3) {
  //   setTimeout(() => {
  //     this.setTimePassed();
  //   }, 5000);
  // }

      return (
            <GameLoop style={styles.container} onUpdate={this.updateHandler}>
              <View style={[styles.player, { left: this.state.x, top: this.state.y }]} />
              <View style={{ backgroundColor: '#23272A' }} >
              <CardSection>
              <Button onPress={this.onButtonPress.bind(this)}>
                Finish
              </Button>
              </CardSection>
              </View>

            </GameLoop>
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
    backgroundColor: "green",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});

export default Game3;
