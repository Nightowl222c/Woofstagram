import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// --- Main screens ---

// --- Onboarding screens ---
const Stack = createStackNavigator();

const SignInScreen = () => {
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Sign In</Text>
        </View>
    )
}

const SignUpScreen = () => {
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Sign up</Text>
        </View>
    )
}

// --- App ---

const App = () => (
    <NavigationContainer>

    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
import * as React from 'react';
import { StyleSheet } from 'react-native';

// --- Main screens ---

// --- Onboarding screens ---

// --- App ---

const App = () => (
  null
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
