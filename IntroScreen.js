// IntroScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Quiz!</Text>
      <Text style={styles.text}>You have to answer 10 questions with true or false!</Text>
      <Button title="Begin" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default IntroScreen;
