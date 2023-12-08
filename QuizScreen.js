import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = ({ navigation }) => {
  const questions = [
    {
      category: "Geography",
      question: "Switzerland has four national languages, English being one of them.",
      correctAnswer: "False",
    },
    {
      category: "Video Games",
      question: "In the game 'Melty Blood Actress Again Current Code', you can enter Blood Heat mode in Half Moon style.",
      correctAnswer: "False",
    },
    {
      category: "Musicals & Theatres",
      question: "The protagonist's names in 'Who's Afraid of Virginia Woolf', George and Martha, were derived from George Washington and his wife.",
      correctAnswer: "True",
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      question: "Druid is a mage class in 'Log Horizon'.",
      correctAnswer: "False",
    },
    {
      category: "Video Games",
      question: "In 'The Sims' series, the most members in a household you can have is 8.",
      correctAnswer: "True",
    },
    {
      category: "Video Games",
      question: "The video game 'Fuel' has an open world that is 5,560 square miles?",
      correctAnswer: "True",
    },
    {
      category: "Video Games",
      question: "Danganronpa 2: Goodbye Despair featured all of the surviving students from the first game.",
      correctAnswer: "False",
    },
    {
      category: "Mythology",
      question: "Janus was the Roman god of doorways and passageways.",
      correctAnswer: "True",
    },
    {
      category: "History",
      question: "The USS Missouri (BB-63) last served in the Korean War.",
      correctAnswer: "False",
    },
    {
      category: "Entertainment: Japanese Anime & Manga",
      question: "Throughout the entirety of 'Dragon Ball Z', Goku only kills two characters: a miniboss named Yakon and Kid Buu.",
      correctAnswer: "True",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    const isCorrect = answer === currentQuestion.correctAnswer;

    setResults([...results, { question: currentQuestion.question, isCorrect }]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Results', { results });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{currentQuestion.category}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.questionCount}>{`${currentQuestionIndex + 1}/${questions.length}`}</Text>
        <Text style={styles.question}>{currentQuestion.question}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="True" onPress={() => handleAnswer('True')} />
        <Button title="False" onPress={() => handleAnswer('False')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  questionCount: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default QuizScreen;



