import React from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/styles'


export default function Scoreboard({ navigation }) {
  return (
    <>
    <Header/>
    <View style={styles.container}>
      <Text>
        Scoreboard will be here...
      </Text>
    </View>
    <Footer/>
    </>
  )
}