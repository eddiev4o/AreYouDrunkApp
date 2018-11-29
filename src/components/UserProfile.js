import React, { Component } from 'react';
import { View, Text, Picker, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Input, Button, Spinner } from './common';

class UserProfile extends Component {

  onButtonPress() {
    Actions.game1();
  }

  render() {
    return (
      <View style={{ backgroundColor: '#23272A'}}>
        <CardSection style={{flexDirection: 'column'}}>
        <Text style={styles.pickerTextStyle}>Gender</Text>
          <Picker>
            <Picker.Item label='Male' value="Male" />
            <Picker.Item label='Female' value="Female" />
          </Picker>
        </CardSection>

        <CardSection>
          <Input
          label="Weight"
          placeholder="Enter Weight"
          value={this.props.phone}
          />
        </CardSection>

        <CardSection style={{flexDirection:'column'}}>
          <Text style={styles.pickerTextStyle}>Drinks</Text>
          <Picker
          selectedValue={this.props.drinks}
          onValueChange = { value => this.props }
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
          <Button onPress={this.onButtonPress.bind(this)}>
            BEGIN
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

export default UserProfile;
