import React, { Component } from 'react';
import { View, Text, Picker, ImageBackground, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Input, Button, Spinner } from './common';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';

class UserProfile extends Component {

  onButtonPress() {
    Actions.game1();
  }

  onPOSTPress() {
    const { sex, weight, drinks, reaction } = this.props;
    console.log({sex});
    console.log({weight});
    console.log({drinks});
    console.log({reaction});
    var data = { sex, weight, drinks, reaction };
    fetch('http://chrisreycap.pythonanywhere.com/predict/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response)=> {
      Alert.alert("Your BAC % is : " + (response._bodyText))
      console.log((response._bodyText))
    })
  }

  render() {
    return (
      <View style={{ backgroundColor: '#164170'}}>

        <CardSection style={{flexDirection: 'column'}}>
        <Text style={styles.pickerTextStyle}>Sex</Text>
          <Picker
            selectedValue={this.props.sex}
            onValueChange={value => this.props.profileUpdate({ prop: 'sex', value })}
          >
            <Picker.Item label='' />
            <Picker.Item label='Male' value="1" />
            <Picker.Item label='Female' value="0" />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
          label="Weight"
          placeholder="Enter Weight"
          value={this.props.weight}
          onChangeText={text => this.props.profileUpdate({ prop: 'weight', value: text })}
          />
        </CardSection>

        <CardSection style={{flexDirection:'column'}}>
          <Text style={styles.pickerTextStyle}>Drinks</Text>
          <Picker
          selectedValue={this.props.drinks}
          onValueChange = { value => this.props.profileUpdate({ prop: 'drinks', value })}
          >
            <Picker.Item label='1' value="1" />
            <Picker.Item label='2' value="2" />
            <Picker.Item label='3' value="3" />
            <Picker.Item label='4' value="4" />
            <Picker.Item label='5' value="5" />
            <Picker.Item label='6' value="6" />
            <Picker.Item label='7' value="7" />
            <Picker.Item label='8' value="8" />
            <Picker.Item label='9' value="9" />
            <Picker.Item label='10' value="10" />
            <Picker.Item label='DRUNK' value="Drunk" />
          </Picker>
        </CardSection>
        <CardSection>
          <Input
          label="Reaction Time"
          placeholder="Enter time in milliseconds"
          value={this.props.time}
          onChangeText={text => this.props.profileUpdate({ prop: 'reaction', value: text })}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            BEGIN
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onPOSTPress.bind(this)}>
            POST REQUEST
          </Button>
        </CardSection>
      </View>
    );
  }
}

  const styles = {
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20,
    }
  };

  const mapStateToProps = (state) => {
    const { sex, weight, drinks, reaction } = state.userProfile;
    return {sex, weight, drinks, reaction }
  };

export default connect(mapStateToProps, {profileUpdate}) (UserProfile);
