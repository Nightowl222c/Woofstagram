import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [breed, setBreed] = useState('');
    const [toy, setToy] = useState('');
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
                secureTextEntry={true}
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
    const {label, placeholder, value, onChangeText, secureTextEntry} = props;

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

export default App;
