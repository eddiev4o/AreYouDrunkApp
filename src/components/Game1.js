import React, {Component, PureComponent} from 'react';
import { Provider } from 'react-redux'
import { TouchableOpacity, View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';


class Game1 extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: Math.floor((Math.random() * 8) + 1),
      seconds: 0,
      milliseconds: 0,
      turns: 10,
      results: [0,0,0,0,0,0,0,0,0,0],
      answered: false,
      average: 0,
      total: 0,
    };
  }
  componentDidMount () {
    this.myInterval = setInterval(() => {
      if (this.state.answered == false & this.state.turns > 0) {
        this.state.results[this.state.turns - 1] = 5000;
      }
      if (this.state.turns > 0) {
      this.setState(prevState => ({
          count: Math.floor((Math.random() * 8) + 1),
          seconds : 0,
          milliseconds : 0,
          turns : this.state.turns - 1,
          answered : false
      }))
    }
    if (this.state.turns === 0) {
      this.stopTimer();
      for (var i = 0; i < 10; i++) {
        this.state.total += this.state.results[i];
      }
      this.state.average = this.state.total / 10;
      console.log(this.state.results);
      console.log(this.state.average);
      this.props.profileUpdate({ prop: 'reaction', value: this.state.average });
      Actions.game2();
      this.setState(prevState => ({
          count: Math.floor((Math.random() * 8) + 1),
          seconds : 0,
          milliseconds : 0,
          turns : this.state.turns - 1,
          answered : false,
      }))
    }
  }, 4000);

    this.myInterval2 = setInterval(() => {
      this.setState(prevState => ({
        milliseconds : prevState.milliseconds + 1
      }))
    }, 100);

  }

  componentWillUnmount() {
    console.log('componentWillUnmount called in Game1');
    clearInterval(this.myInterval);
    clearInterval(this.myInterval2);
  }

onButtonPress() {
  clearInterval(this.myInterval);
  clearInterval(this.myInterval);
  console.log('cleared intervals in Game1');
 Actions.game2intro();
}

stopTimer() {
  console.log('stopTimer called in Game1')
  clearInterval(this.myInterval);
  clearInterval(this.myInterval2);
}

onTruePress() {
  console.log(this.state.answered);
  if(this.state.answered == false && this.state.turns > 0) {
    this.state.answered = true;
    var img = this.state.count;
    var turn = this.state.turns;
    console.log(img)
    if ( img === 0 || img === 5  || img === 7) {
      this.state.results[turn - 1] = this.state.milliseconds * 100;
      console.log(this.state.results[turn-1]);
    } else {
      this.state.results[turn-1] = 6000;
      console.log(this.state.results[turn-1]);
    }
  }
}

onFalsePress() {
  console.log("false");
  if(this.state.answered == false && this.state.turns > 0) {
    this.state.answered = true;
    var img = this.state.count;
    var turn = this.state.turns;
    if (img === 1 || img === 2 || img === 3 || img === 4 || img === 6 || img === 8) {
      this.state.results[turn - 1] = this.state.milliseconds * 100;
      console.log(this.state.results[turn-1]);
    } else {
      this.state.results[turn - 1] = 6000;
      console.log(this.state.results[turn-1]);
    }
  }
}

  render() {
      const {count} = this.state
      const {seconds} = this.state
      const {milliseconds} = this.state
      const {turns} = this.state

      if (this.state.milliseconds % 10 == 0 && this.state.milliseconds != 0) {
        this.state.seconds = seconds + 1
      }

      disMS = this.state.milliseconds % 10
      var pics = [
      require('../../img/BlueBlue.png'),
      require('../../img/BlueGreen.png'),
      require('../../img/BlueRed.png'),
      require('../../img/RedBlue.png'),
      require('../../img/RedGreen.png'),
      require('../../img/RedRed.png'),
      require('../../img/GreenBlue.png'),
      require('../../img/GreenGreen.png'),
      require('../../img/GreenRed.png')];

      var buttons = [
        require('../../img/true.png'),
        require('../../img/false.png')
      ];
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                <Text style={styles.textStyle2}>Tap when the color matches the word</Text>
                <Text style={{ color: "red", textAlign: 'center', fontSize: 42}}><Text style={{color: 'white'}}>Round:</Text> {turns}</Text>
                <Text style={styles.textStyle1}>
                {seconds}.
                {disMS}
                </Text>
                  <View style={styles.gameContainer}>
                  <TouchableOpacity>
                    <Image source={pics[count]} style={{ width: 128, height: 64 }} />
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

const mapStateToProps = (state) => {
  const { sex, weight, drinks, reaction } = state.userProfile;
  return {sex, weight, drinks, reaction }
};

export default connect(mapStateToProps, {profileUpdate}) (Game1);
