import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

function App() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf01'
        }}>
            <InputWithLabel
                label="Email"
                placeholder="Type your email here"
                value=""
                onChangeText={() => {
                }}
            />
            <InputWithLabel
                label="Password"
                placeholder="Type your password here"
                value=""
                onChangeText={() => {
                }}
            />
            <InputWithLabel
                label="Name"
                placeholder="Type your pet's name here" 
                value=""
                onChangeText={() => {
                }}
            />
            
        </View>

    )
}

function InputWithLabel(props) {
    const {label, placeholder, value, onChangeText} = props;

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

export default App;
