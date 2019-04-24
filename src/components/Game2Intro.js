import React, {Component, PureComponent} from 'react';
import { TouchableOpacity, View, Text, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {Actions} from 'react-native-router-flux';
import {CardSectionBlue, Button} from './common';
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

class Game2Intro extends PureComponent {

onButtonPress() {
 Actions.game2();
}
  render() {
      return (
              <View style={{flex: 1, backgroundColor: '#164170' }}>
                <Text style={styles.textStyle2}> Try to Remember Each Word in the Following Sequence</Text>
                <View style={styles.gameContainer}>
                  <Text style={styles.textStyle2}> You will then be shown a second sequence, verify which words were in the first sequence, and which were not.</Text>
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
    backgroundColor: '#164170',
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

export default Game2Intro;
