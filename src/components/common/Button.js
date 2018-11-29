import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) => {
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
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
        },
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#E8971C',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#fff',
            marginLeft: 5,
            marginRight: 5
        }
    };

export { Button };
