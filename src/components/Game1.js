import React, {Component, PureComponent} from 'react';
import { View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game1 extends Component {
//   state = {
//     timer: null,
//     counter: 0
//   };
//   mixins: [TimerMixin]
//
//   componentDidMount () {
//     this.myInterval = setInterval(() => {
//       countUp();
//     }, 3000)
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.myInterval)
//   }
//
// countUp() {
//   this.setState({
//     counter: this.state.counter + 1
//   });
// }

onButtonPress() {
 Actions.game2();
}

  render() {
      const pic = '../../img/BlueBlue.png';
      const pic2 = '../../img/BlueGreen.png';
      const pic3 = '../../img/BlueRed.png';
      const pic4 = '../../img/RedBlue.png';
      const pic5 = '../../img/RedGreen.png';
      const pic6 = '../../img/RedRed.png';
      const pic7 = '../../img/GreenBlue.png';
      const pic8 = '../../img/GreenGreen.png';
      const pic9 = '../../img/GreenRed.png';
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                  <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#164170' }}>
                  <Image source={require(''+pic+'')} style={{ width: 128, height: 64 }} />
                  </View>
                  <CardSectionBlue>
                    <Button onPress={this.onButtonPress.bind(this)}>
                      Game 2
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
  player: {
    position: "absolute",
    backgroundColor: "darkblue",
    width: RADIUS * 2,
    height: RADIUS * 2,
    borderRadius: RADIUS * 2
  }
});

export default Game1;
