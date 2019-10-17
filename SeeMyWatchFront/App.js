import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FormActivity from './Components/FormActivity';
import Custom from './customWatch';
import Rendu from './rendu';
import Main from './Pages/Main';
//import Cadrans from './Pages/Cadrans';

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
  constructor(props) {
    super(props);
    this.state = {
      Screen: 1
    }
  }

  render() {
    if (this.state.Screen == 0) {
      return (
        <View>
          <Main />
          <Button title="gotoview1" onPress={() => { this.setState({ Screen: 1 }) }} />

        </View>
      )
    }
    else {
      return (
        <View>
          <FormActivity />
          <Button title="gotoview0" onPress={() => { this.setState({ Screen: 0 }) }} />
        </View>
      )
    }
  }
}