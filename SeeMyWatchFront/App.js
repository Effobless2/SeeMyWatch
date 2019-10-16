import React from 'react';
import { View, Button} from 'react-native';
import Main from './Pages/Main';
import FormActivity from './Components/FormActivity';
//import Cadrans from './Pages/Cadrans';



export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      Screen: 1
    }
  }
  
         


render() {
  if (this.state.Screen == 0){

    return (
      <View>
        <Main/>
        <Button title="gotoview1" onPress={() => {this.setState({Screen : 1})}}/>

      </View>
    )
  }
  else{
    return (
      <View>
        <FormActivity/>
        <Button title="gotoview0" onPress={() => {this.setState({Screen : 0})}}/>
      </View>
    )
  }
}

}










  
