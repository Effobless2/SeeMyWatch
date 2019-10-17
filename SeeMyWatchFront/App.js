import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Custom from './customWatch';
import Rendu from './rendu';

export default class App extends React.Component {
  render() {
    return (
        <Custom />
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
