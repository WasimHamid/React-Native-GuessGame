import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import Colors from '../constants/colors'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.gameOver}>The Game is Over!</Text>
      <Text style={styles.gameRounds}>
        Number of rounds: {props.roundsNumber}
      </Text>
      <Text style={styles.gameChoice}>Number was: {props.userNumber}</Text>
      <View style={styles.Button}>
        <Button title="New Game" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gameOver: {
    padding: 10,
    color: Colors.primary,
    fontSize: 30
  },
  gameRounds: {
    padding: 10,
    color: "green",
    fontSize: 25
  },
  gameChoice: {
    padding: 10,
    color: Colors.accent,
    fontSize: 20
  },
  Button: {
    padding: 50,
  }
});

export default GameOverScreen;
