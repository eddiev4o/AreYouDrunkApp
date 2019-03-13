import React, {Component, PureComponent} from 'react';
import { TouchableOpacity, View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
import { GameLoop } from "react-native-game-engine";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game1 extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      count: 0,
    }
  }


onButtonPress() {
 Actions.game2();
}

  render() {
      const {count} = this.state
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
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                <Text style={styles.textStyle2}>Tap when the color matches the word</Text>
                  <View style={styles.gameContainer}>
                  <TouchableOpacity>
                    <Image source={pics[count]} style={{ width: 128, height: 64 }} />
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
    fontSize: 40,
    color: '#E8971C',
    textAlign: 'center',
    marginTop: 20
  }
});

export default Game1;
