import React, {Component, PureComponent} from 'react';
import { Provider } from 'react-redux'
import { TouchableOpacity, View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';


class Game2Outro extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
      set: true,
      seconds: 0,
      milliseconds: 0,
      turns: 10,
      results: [0,0,0,0,0,0,0,0,0,0],
      answered: false,
      //average: 0,
      total: 0,
      var: wordbank = {},
      var: bankOne = {
        words: ['club','thirsty','merge','hive','spot','quit','climb', 'leather', 'believe', 'capable']
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


onButtonPress() {
  Actions.game3();
}

onTruePress() {
  this.state.answered = true;
  //var img = this.state.count;
  var turn = this.state.turns;
  if ( this.state.turn == 1 || this.state.turn == 2 || this.state.turn == 4 || this.state.turn == 7 || this.state.turn == 9) {
    this.state.results[turn - 1] = this.state.milliseconds * 100;
  } else {
    this.state.results[turn-1] = 6000;
  }
}

onFalsePress() {
  this.state.answered = true;
  //var img = this.state.count;
  var turn = this.state.turns;
  if (this.state.turn == 0 || this.state.turn == 3 || this.state.turn == 5 || this.state.turn == 6 || this.state.turn == 8) {
    this.state.results[turn - 1] = this.state.milliseconds * 100;
  } else {
    this.state.results[turn - 1] = 6000;
  }
}

  render() {
      const {count} = this.state
      const {seconds} = this.state
      const {milliseconds} = this.state
      const {turns} = this.state

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

      if (this.state.milliseconds % 10 == 0 && this.state.milliseconds != 0) {
        this.state.seconds = seconds + 1
      }

      disMS = this.state.milliseconds % 10

      var buttons = [
        require('../../img/true.png'),
        require('../../img/false.png')
      ];
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                <Text style={styles.textStyle2}>Tap when you recognize the word</Text>
                <Text style={{ color: "red", textAlign: 'center', fontSize: 42}}><Text style={{color: 'white'}}>Round:</Text> {turns}</Text>
                <Text style={styles.textStyle1}>
                {seconds}.
                {disMS}
                </Text>
                  <View style={styles.gameContainer}>
                  <TouchableOpacity>
                    <Text style={styles.textStyle}>{wordbank.words[count]}</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <TouchableOpacity onPress={this.onTruePress.bind(this)}>
                    <Image source={buttons[0]} style={{ width: 115, height: 115, marginRight: 50}} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.onFalsePress.bind(this)}>
                    <Image source={buttons[1]} style={{ width: 115, height: 115, marginLeft: 50}} />
                  </TouchableOpacity>
                  </View>
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
      if (this.state.answered == false & this.state.turns > 0) {
        this.state.results[this.state.turns - 1] = 5000;
      }
      if (this.state.turns > 0) {
      this.setState(prevState => ({
          count : prevState.count + 1,
          seconds : 0,
          milliseconds : 0,
          turns : this.state.turns - 1,
          answered : false
      }))
    }
    if (this.state.turns === 0) {
      this.state.turns = -1;
      for (var i = 0; i < 10; i++) {
        this.state.total += this.state.results[i];
      }
      this.state.average = this.state.total / 10;
      //this.props.profileUpdate({ prop: 'reaction', value: this.state.average });
      Actions.results();
    }
  }, 4000);

    this.myInterval2 = setInterval(() => {
      this.setState(prevState => ({
        milliseconds : prevState.milliseconds + 1
      }))
    }, 100);

  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
    clearInterval(this.myInterval2);
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
    marginBottom: 5,
    marginRight: 25,
    marginLeft: 25
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
  textStyle1 : {
    color: "yellow",
    textAlign: 'center',
    fontSize: 42
  },
  textStyle2 : {
    fontSize: 40,
    color: '#E8971C',
    textAlign: 'center',
    marginTop: 20
  }
});

export default Game2Outro;

/*
const mapStateToProps = (state) => {
  const { sex, weight, drinks, reaction } = state.userProfile;
  return {sex, weight, drinks, reaction }
};

export default connect(mapStateToProps, {profileUpdate}) (Game1);
*/