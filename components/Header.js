import React from 'react'
import { Text, View } from 'react-native'
import styles from '../styles/styles'



export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        Mini Yatzee
      </Text>
    </View>
  )
}