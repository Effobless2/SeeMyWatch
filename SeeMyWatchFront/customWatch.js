import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    red: {
      color: 'red',
    },
    Image: {
        
    }
  });

export default class Custom extends Component {

    constructor(props){
        super(props);
        this.state = {
            bracelet: 'sport',
            boitier: 'rond',
            cadran: 'sport',
            matiere: 'cuir'
        }
    }

    render() {
        return (
            <View>            
            <Picker
            style={{width: 200}}
            selectedValue={this.state.bracelet}
            onValueChange={(br) => this.setState({bracelet: br})}>
            <Picker.Item label="Sport" value="sport" />
            <Picker.Item label="Ville" value="ville" />
          </Picker>  
           <Picker
            style={{width: 200}}
            selectedValue={this.state.boitier}
            onValueChange={(boi) => this.setState({boitier: boi})}>
            <Picker.Item label="Rond" value="rond" />
            <Picker.Item label="Coussin" value="coussin" />
          </Picker>
            <Picker
            style={{width: 200}}
            selectedValue={this.state.cadran}
            onValueChange={(cad) => this.setState({cadran:cad})}>
            <Picker.Item label="Sport" value="sport" />
            <Picker.Item label="Ville" value="ville" />
          </Picker>  
           <Picker
            style={{width: 200}}
            selectedValue={this.state.matiere}
            onValueChange={(ma) => this.setState({matiere: ma})}>
            <Picker.Item label="Cuir" value="cuir" />
            <Picker.Item label="Sillicone fin" value="sillicone fin" />
            <Picker.Item label="Sillicone large" value="sillicone large" />
          </Picker>
          <Text>The default bracelet is {this.state.bracelet}</Text>
          <Text>The default boitier is {this.state.boitier}</Text> 
          <Text>The default cadran is {this.state.cadran}</Text>
          <Text>The default aiguille is {this.state.matiere}</Text> 
          <View>
            {this.state.matiere == "cuir" ? (<Image source={require('./assets/bcuir.png')} />) 
            : this.state.matiere == "sillicone fin" ? (<Image source={require('./assets/bsf.png')} />)
            : <Image source={require('./assets/bsl.png')} />
            } 
          </View>
          </View>
        );
    }
}