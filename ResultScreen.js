import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { results } = route.params;

  const correctAnswers = results.filter((result) => result.isCorrect);
  const incorrectAnswers = results.filter((result) => !result.isCorrect);
  const score = correctAnswers.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.score}>{`Your Score: ${score}/${results.length}`}</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>+ Correct Answers:</Text>
        {correctAnswers.map((result, index) => (
          <Text key={index} style={styles.correctText}>{result.question}</Text>
        ))}
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>- Incorrect Answers:</Text>
        {incorrectAnswers.map((result, index) => (
          <Text key={index} style={styles.incorrectText}>{result.question}</Text>
        ))}
      </View>

      <Button title="Play Again" onPress={() => navigation.navigate('Intro')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correctText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'green',
  },
  incorrectText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'red',
  },
});

export default ResultScreen;









