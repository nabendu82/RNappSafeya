import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>React Native</Text>
      <Button 
        title='RN Docs' 
        onPress={() => {Linking.openURL('https://reactnative.dev/docs/environment-setup')}} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 30,
    margin: 10
  }
})

export default App