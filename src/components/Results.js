import React, { PureComponent, Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection, Input, ButtonMain, Spinner} from './common';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';

class Results extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      dataResp: 0,
    }
  }

  onButtonPress() {
    Actions.start();
  }
  render() {
    const { sex, weight, drinks, reaction } = this.props;
    var data = { sex, weight, drinks, reaction };
    fetch('http://chrisreycap.pythonanywhere.com/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          sex: this.props.sex,
          weight: this.props.weight,
          drinks: this.props.drinks,
          reaction: this.props.reaction,
        }),
    })
      .then((response)=> response.json())
      .then((responseData) => {
        this.setState(previousState => (
          { dataResp: responseData.BAC}
        ));
      console.log(responseData);
      console.log("dataResp", this.state.dataResp)
    })

    return (
      <ImageBackground source={require('../../img/results.gif')}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={{flex: 1, flexDirection: 'column', marginBottom: 25}}>
          <View style={styles.gameContainer}>
            <Text style={styles.textStyle2}> BAC: {this.state.dataResp}</Text>
          </View>
          <ButtonMain onPress={this.onButtonPress.bind(this)} style={{flex: 2, justifyContent: 'flex-end', marginBottom: 25}}>
            Try Again
          </ButtonMain>
      </SafeAreaView>
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 300,
    marginBottom: 100,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "#164170"
  },
  textStyle2 : {
    fontSize: 40,
    color: '#E8971C',
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  const { sex, weight, drinks, reaction } = state.userProfile;
  return {sex, weight, drinks, reaction }
};

export default connect(mapStateToProps, {profileUpdate}) (Results);
