import React from 'react'
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from './Header'
import Footer from './Footer'
import {
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  BONUS_POINTS, } from '../constants/Game'
import styles from '../styles/styles';
 
  let board = [];

export default function Gameboard() {

  const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
  const [status, setStatus] = useState('Throw dices');
  const [gameEndStatus, setGameEndStatus] = useState(false);

  // If dices are selected or not
  const [selectedDices, setSelectedDices] =
  useState(new Array(NBR_OF_DICES).fill(false));
  // Dice spots
  const [diceSpots, setDicesSpots] =
  useState(new Array(NBR_OF_DICES).fill(0));
  // If dice points are selected or not
  const [selectedDicePoints, setSelectedDicePoints] =
  useState(new Array(MAX_SPOT).fill(false));
  // Total points for different spots
  const [diceTotalPoints, setdiceTotalPoints] =
  useState(new Array(MAX_SPOT).fill(0));

  const [playerName, setPlayerName] = useState('');

  const row = [];
  //i is dice
  for (let i = 0; i < NBR_OF_DICES; i++) {
    row.push(
      <View style={styles.dice}>
      <Pressable 
          key={"row" + i}
          onPress={() => selectDice(i)}
          >
        <MaterialCommunityIcons
          name={board[i]}
          key={"row" + i}
          size={50}
          color={getDiceColor(i)}
          >
        </MaterialCommunityIcons>
      </Pressable>
      </View>
    );
  }

  const selectDice = (k) => {
    let dices = [...selectedDices];
    dices[k] = selectedDices[k] ? false : true;
    setSelectedDices(dices);
    console.log(dices);
  }
 

  function getDiceColor(k) {
    return selectedDices[k] ? "purple" : "pink"
  }

  const throwDices = () => {
    for (let k = 0; k < NBR_OF_DICES; k++) {
      if (!selectedDices[k]) {
        let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
        board[k] = 'dice-' + randomNumber;
      }
    }
    setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
  }

  return (
    <>
      <Header />
      <View style={styles.dicesRow}>
       {row}
       
      </View>
      <Text>THROWS LEFT {nbrOfThrowsLeft}</Text>
      <Text>{status}</Text>
      <Pressable
      style={styles.continueButton}
      onPress={() => throwDices()}>
        <Text>THROW</Text>
      </Pressable>
      <Footer />
    </>
  )
}