import React, {Component, PureComponent} from 'react';
import { SafeAreaView, View, Text, TextInput, AppRegistry, StyleSheet, Dimensions } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
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
                <Text style={styles.textStyle2}>Memorize each word in the sequence</Text>
                <Text style={styles.textStyle}>{bankOne.words[count]}</Text>
                <CardSectionBlue>
                <Button onPress={this.onButtonPress.bind(this)}>
                  Game 3
                </Button>
                </CardSectionBlue>

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
    backgroundColor: "#164170",
    //justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle : {
    fontSize: 36,
    height: 50,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 100
  },
  textStyle2 : {
    fontSize: 40,
    color: '#E8971C',
    textAlign: 'center'

  }
});

export default Game2;
