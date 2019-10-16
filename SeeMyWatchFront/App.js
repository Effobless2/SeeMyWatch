import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormActivity from './Components/FormActivity';
export default function App() {
  return (
    <View style={styles.container}>
      <FormActivity/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
