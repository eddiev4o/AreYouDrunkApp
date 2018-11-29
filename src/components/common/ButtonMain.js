import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonMain = ({onPress, children}) => {
    const {buttonStyle, textStyle} = style;

    return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
           {children}
        </Text>
    </TouchableOpacity>
    );
};

    const style = {
        textStyle: {
            alignSelf: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: 18,
            fontWeight: '600'
        },

        buttonStyle: {
            alignSelf: 'stretch',
            alignItems: 'center',
            backgroundColor: '#E8971C',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#fff',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 650,
            padding: 10
        }
    };

export { ButtonMain };
