import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breed, setBreed] = useState('');
    const [toy, setToy] = useState('');

    function confirmationPasswordMatch(props) {
        const {nativeEvent: { text } }= props;
    //... check password against confirmation password
        if (text !== password) {
            alert('Passwords do not match, please try again.')
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf01'
        }}>
            <InputWithLabel
                label="Email"
                placeholder="Type your email here"
                value={email}
                onChangeText={setEmail}
            />
            <InputWithLabel
                label="Password"
                placeholder="Type your password here"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <InputWithLabel
                label="Confirm Password"
                placeholder="Confirm your password here"
                value={confirmationPassword}
                onChangeText={setConfirmationPassword}
                secureTextEntry
                onSubmitEditing={confirmationPasswordMatch}
            />
            <InputWithLabel
                label="Name"
                placeholder="Type your pet's name here." 
                value={name}
                onChangeText={setName}
            />
             <InputWithLabel
                label="Date of birth"
                placeholder="Type your pet's name here" 
                value={birthday}
                onChangeText={setBirthday}
            />
            <InputWithLabel
                label="Breed"
                placeholder="Type your pet's breed here" 
                value={breed}
                onChangeText={setBreed}
            />
             <InputWithLabel
                label="Toy"
                placeholder="Type your pet's toy here" 
                value={toy}
                onChangeText={setToy}
            />
        </View>

    )
}

function InputWithLabel(props) {
    const {label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing} = props;

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    );
}

export default App;
