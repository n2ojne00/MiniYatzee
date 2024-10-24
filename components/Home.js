import React, { useState } from 'react'
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from './Header';
import Footer from './Footer';

import {
  NBR_OF_DICES,
  NBR_OF_THROWS,
  MIN_SPOT,
  MAX_SPOT,
  BONUS_POINTS_LIMIT,
  BONUS_POINTS,
} from '../constants/Game'
import styles from '../styles/styles';


export default function Home({ navigation }) {

  const [playerName, setPlayerName] = useState('');
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
      //When playername is given keyboard can dismiss
    }
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="information"
          size={90}
          color="tomato" />

        {!hasPlayerName ?
          //rules will show up after hasPlayerName been set to true
          <>

            <Text>For scoreboard enter your name..</Text>
            <TextInput
              onChangeText={setPlayerName}
              autoFocus={true}
              style={{ borderWidth: 1, width: '50%' }}
            />

            <Pressable
              onPress={() => handlePlayerName(playerName)}
              style={styles.continueButton}>
              <Text>OK</Text>
            </Pressable>
          </>


          :

          <>
          <View style={styles.rules}>
            <Text style={styles.txtMed}>Rules of the game</Text>
            <Text multiline="true" style={styles.txtMin}>
              THE GAME: Upper section of the classic Yahtzee
              dice game. You have {NBR_OF_DICES} dices and
              for the every dice you have {NBR_OF_THROWS} 
              throws. After each throw you can keep dices in
              order to get same dice spot counts as many as
              possible. In the end of the turn you must select
              your points from {MIN_SPOT} to {MAX_SPOT}.
              Game ends when all points have been selected.
              The order for selecting those is free.
            </Text>
            <Text style={styles.txtMin && {fontWeight: 'bold'}}> Good luck, {playerName}</Text>

          </View>

            <Pressable style={styles.continueButton}
              onPress={() => navigation.navigate('Gameboard')}>
              <Text>PLAY</Text>
            </Pressable>

          </>
        }


      </View>
      <Footer />
    </>
  )
}