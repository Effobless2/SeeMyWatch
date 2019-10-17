import React from 'react';
import { StyleSheet,Button, Text, View } from 'react-native';
import Cadrans from './Pages/Cadrans';
import Main from './Pages/Main';
import FormActivity from './Components/FormActivity';

export default class App extends React.Component {
  constructor(props) {
        super(props);
        this.state= {
          Screen: 0
        }
    console.log(this.state.Screen);
  }

  
  render(){
    
      if(this.state.Screen == 0)   
        return(
          
          <View style={styles.container}>
            <FormActivity/>
            <Button title="gotoview1" onPress={() => {this.setState({Screen : 1})}}/>
          </View>
        );
    
        if(this.state.Screen == 1)   
        return(
          
          <View style={styles.container}>
            <Main/>
            <Button title="gotoview1" onPress={() => {this.setState({Screen : 2})}}/>
          </View>
        );

        if(this.state.Screen == 2)   
        return(
          
          <View style={styles.container}>
            <Cadrans/>
            <Button title="gotoview1" onPress={() => {this.setState({Screen : 1})}}/>
          </View>
        );

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






  
