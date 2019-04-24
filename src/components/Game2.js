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
  global.bankNum = Math.floor((Math.random() * 5) + 1);
  this.state = {
    word: '',
    count: 0,
    set: true,
    var: wordbank = {},
    var: bankOne = {
      words: ['shoe','merge','thirsty','color','spot','temporary','think', 'capable', 'neat', 'leather']
     },
     var: bankTwo = {
      words: ['knife','heavy','daughter','lively','damage','organize','plan', 'wake', 'lip', 'soap']
     },
     var: bankThree = {
       words: ['copy','travel','current','press','sister','bike','weather','bottle','impolite','punish']
     },
     var: bankFour = {
      words: ['elated','grip','carpenter','education','dress','salt','soak','scare','allure','napkin']
    },
    var: bankFive = {
      words: ['quartz','wave','church','love','great','faint','pen','battery','store','risk']
    }
  }
}
  render() {
      const {count} = this.state  
      if(this.state.set) {
          if(global.bankNum == 1){
            wordbank = bankOne;
          }
          if(global.bankNum == 2){
            wordbank = bankTwo;
          }
          if(global.bankNum == 3){
            wordbank = bankThree;
          }
          if(global.bankNum == 4){
            wordbank = bankFour;
          }
          if(global.bankNum == 5){
            wordbank = bankFive;
          }
        this.state.set = false;
        }
      return (

        <View style={{flex: 1, backgroundColor: '#164170' }}>
                <View style={styles.gameContainer}>
                <Text style={styles.textStyle}>{wordbank.words[count]}</Text>
                </View>
                  <CardSectionBlue>
                  </CardSectionBlue>
              </View>
    );
  }

  componentDidMount () {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count : prevState.count + 1
      }))
    
      if(this.state.count == 10){
        Actions.game2outro();
      }
    
    }
    , 3000)
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
    fontSize: 40,
    color: '#E8971C',
    textAlign: 'center',
    marginTop: 20

  }
});

export default Game2;
