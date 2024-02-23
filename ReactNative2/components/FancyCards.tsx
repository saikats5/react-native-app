import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png'
        }} style={styles.cardImage}/>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardLabel}>React Native Label</Text>
        <Text style={styles.cardDescription}>React Native Description - It is a cross-platform mobile application framework</Text>
        <Text style={styles.cardFooter}>React Native Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    card: {},
    cardElevated: {},
    cardImage: {
        height: 180
    },
    cardBody: {},
    cardTitle: {},
    cardLabel: {},
    cardDescription: {},
    cardFooter: {}
})