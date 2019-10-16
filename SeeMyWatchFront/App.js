import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import Form from "./Components/Form"
import ViewLogin from "./Components/ViewLogin"
import FormActivity from "./Components/FormActivity"
export default class App extends React.Component{
  render(){

    return (
      <View>
        <FormActivity/>
      </View>
        
    
  );
}
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
