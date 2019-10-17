import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormActivity from './Components/FormActivity';
import Custom from './customWatch';
import Rendu from './rendu';

//const defaultAssetExts = require('metro.config.js').assetExts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
        <Rendu />
    )
  }
}