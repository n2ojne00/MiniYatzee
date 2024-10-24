import React, { useEffect } from 'react'
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
  BONUS_POINTS,
} from '../constants/Game'
import styles from '../styles/styles';

let board = [];

export default function Gameboard({navigation, route}) {

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
  const [dicePointsTotal, setDicePointsTotal] =
    useState(new Array(MAX_SPOT).fill(0));

  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    if (playerName === '' && route.params?.player) {
      setPlayerName(route.params.player);
    }
  }, [])

 
  const row = [];
  //i is dice
  for (let i = 0; i < NBR_OF_DICES; i++) {
    row.push(
      <View>
        <Pressable
          key={"row" + i}
          onPress={() => selectDice(i)}
        >
          <MaterialCommunityIcons
            name={board[i]}
            key={"row" + i}
            size={70}
            color={getDiceColor(i)}
          >
          </MaterialCommunityIcons>
        </Pressable>
      </View>
    );
  }

  const pointsRow = [];
  for (let spot = 0; spot < MAX_SPOT; spot++) {
    pointsRow.push(
      <Text 
      key={"pointsRow" + spot} 
      style={styles.txtMed}>
        {getSpotTotal(spot)}
      </Text>
    );
  }

  const pointsToSelectRow = [];
  for (let diceButton = 0; diceButton < MAX_SPOT; diceButton++) {
    pointsToSelectRow.push(
      <Pressable key={"buttonsRow" + diceButton}
        onPress={() => selectDicePoints(diceButton)}
      >

        <MaterialCommunityIcons
          key={"buttonsRow" + diceButton}
          name={"numeric-" + (diceButton + 1) + "-box"}
          size={36}
          color={getDicePointsColor(diceButton)}>

        </MaterialCommunityIcons>
      </Pressable>
    );
  }

  //which dices are selected in array
  const selectDice = (k) => {
    let dices = [...selectedDices];
    dices[k] = selectedDices[k] ? false : true;
    setSelectedDices(dices);
  }

  //color for selected and unselected dices
  function getDiceColor(k) {
    return selectedDices[k] ? "brown" : "orange"
  }

  function getDicePointsColor(k) {
    return selectedDicePoints[k] ? "brown" : "orange"
  }

  const selectDicePoints = (k) => {
    if (nbrOfThrowsLeft === 0) {
      let selected = [...selectedDices];
      let selectedPoints = [...selectedDicePoints];
      let points = [...dicePointsTotal];
      if (!selectedPoints[k]) {
        selectedPoints[k] = true;
        let nbrOfDices =
          diceSpots.reduce(
            (total, x) => (x === (k + 1) ? total + 1 : total), 0);
        points[k] = nbrOfDices * (k + 1);
        setDicePointsTotal(points);
        setSelectedDicePoints(selectedPoints);
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        return points[k];
      }
      else {
        setStatus("You already selected points for " + (k + 1));
      }
    }
    else {
      setStatus("Throw " + NBR_OF_THROWS + " times before setting points")
    }

  }

  const throwDices = () => {
    let spots = [...diceSpots];
    for (let k = 0; k < NBR_OF_DICES; k++) {
      if (!selectedDices[k]) {
        let randomNumber = Math.floor(Math.random() * MAX_SPOT + 1);
        spots[k] = randomNumber;
        board[k] = 'dice-' + randomNumber;
      }
    }
    setDicesSpots(spots);
    setNbrOfThrowsLeft(nbrOfThrowsLeft - 1);
  }

  function getSpotTotal(k) {
    return dicePointsTotal[k];
  }

  return (
    <>
      <Header />
      <View style={styles.container}>

        {
          //DICES
        }
        <View style={styles.dicesRow}>
          {row}
        </View>

        <Text style={styles.txtMed}>THROWS LEFT {nbrOfThrowsLeft}</Text>
        <Text style={styles.txtMin}>{status}</Text>
        <Pressable
          style={[
            styles.continueButton, 
            nbrOfThrowsLeft === 0 && styles.disabledButton  // Apply disabled style if no throws left
          ]}
          onPress={() => throwDices()}
          disabled={nbrOfThrowsLeft === 0}>
          <MaterialCommunityIcons name="play" size={24} />
        </Pressable>

        {
          //POINTS
        }
        <View style={styles.dicesRow}>
          {pointsRow}
        </View>

        <View style={styles.dicesRow}>
          {pointsToSelectRow}
        </View>

        <Text style={styles.txtMed}>Player name: {playerName}</Text>


      </View>

      <Footer />

    </>
  )
}