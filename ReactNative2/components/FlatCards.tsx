import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redText]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.greenText]}>
          <Text style={styles.red}>GREEN</Text>
        </View>
        <View style={[styles.card, styles.blueText]}>
          <Text>BLUE</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  card: {
    height: 100,
    width: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  redText:{
    backgroundColor: '#ff0066'
  },
  greenText:{
    backgroundColor: '#4aa532'
  },
  blueText:{
    backgroundColor: '#1177ad'
  },
  red:{
    color: 'red'
  }
})