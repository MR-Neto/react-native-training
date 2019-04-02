import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          email
        </Text>
        <TextInput style={styles.paragraph}>
          email
        </TextInput>
        <Text style={styles.paragraph}>
          password
        </Text>
        <TextInput style={styles.paragraph}>
          password
        </TextInput>
        <Button style={styles.paragraph}>
          Log In
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});