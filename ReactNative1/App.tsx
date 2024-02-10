import React from 'react';
import {View, Text, SafeAreaView, useColorScheme, StyleSheet} from 'react-native';
function App(): JSX.Element{
  const isDark = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDark ? styles.whiteText : styles.blackText}>HELLO WORLD!!!</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center'
  },
  whiteText:{
    color: '#ffffff'
  },
  blackText:{
    color: '#000000'
  }
})
export default App;