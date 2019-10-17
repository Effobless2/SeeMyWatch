import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, Keyboard } from 'react-native';
import React from 'react';
import logo from '../assets/logo.png'
import ServerAPI from '../store/serverAPI'

export default class Form extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    constructor(props){
        super(props);
        
        this.state={
            username:'',
            password: ''
        }
    }
    async _userSignup() {
        let username = this.state.username;
        let password = this.state.password;
        let result = await ServerAPI.Connection(username, password);
        if (result == 404){
            alert("Logins Incorrects");
        }
        else{
            const { navigate } = this.props.navigation;
            navigate("Home");
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />

                <TextInput style={styles.inputBox}
                onChangeText={(username) => this.setState({username})}
                value= {this.state.username}
            
                placeholder="Username"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                
               // onSubmitEditing={()=> this.password.focus()}
               />
                
                <TextInput style={styles.inputBox}
                onChangeText={(password) => this.setState({password})} 
                value= {this.state.password}
              
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#002f6c"
               // ref={(input) => this.password = input}
                />
 
                <TouchableOpacity style={styles.button} > 
                    <Text style={styles.buttonText} onPress={() => this._userSignup() } > Login  </Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 20,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    logo:{
        width:200, 
            height: 200
    }
});