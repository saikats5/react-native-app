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
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8
    },
    card: {
      width: 350,
      height: 100,
      borderRadius: 6,
      marginVertical: 12,
      marginHorizontal: 16
    },
    cardElevated: {
      backgroundColor : '#FFFFFF',
      elevation: 3,
      shadowOffset: {
        width: 1,
        height: 1
      }
    },
    cardImage: {
        height: 100,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12
    },
    cardTitle: {
      color: '#000000',
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6
    },
    cardLabel: {
      color: '#000000',
      fontSize: 14,
      marginBottom: 6
    },
    cardDescription: {
      color: '#242B2E',
      fontSize: 12,
      marginBottom: 12,
      marginTop: 6,
      flexShrink: 1
    },
    cardFooter: {}
})