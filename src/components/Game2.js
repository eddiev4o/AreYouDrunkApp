import React, {Component, PureComponent} from 'react';
import { View, Text, TextInput, AppRegistry, StyleSheet, Dimensions } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSection, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game2 extends PureComponent {
constructor (props) {
  super(props);
  this.state = {
    word: '',
    count: 0,

    var: bankOne = {
      id: 1,
      words: ['thirsty','merge','shoe','color','spot','temporary','think', 'capable', 'neat', 'leather']
     },
     var: bankTwo = {
      id: 2,
      words: ['knife','heavy','daughter','lively','damage','organize','plan', 'wake', 'lip', 'soap']
     }
     
  }
}

onButtonPress() {
 Actions.game3();
}
  render() {

      const {count} = this.state
      return (
              <View style={styles.container} >
                <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                  Game 3
                </Button>
                </CardSection>
                <Text style={styles.textStyle}>{bankOne.words[count]}</Text>

              </View>
    );
  }

  componentDidMount () {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count : prevState.count + 1
      }))
    }, 3000)
  }
  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",  
    //justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle : {
    fontSize: 36,
  }
});

export default Game2;
