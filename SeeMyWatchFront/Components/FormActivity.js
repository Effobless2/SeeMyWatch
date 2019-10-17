import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, AsyncStorage, Keyboard } from 'react-native';
import React from 'react';
import logo from '../assets/logo.png'

 
export default class Form extends React.Component {
 
    constructor(props){
        super(props);
        
        this.state={
            username:'',
            password: '',
            window: 0
        }
    }
    _userSignup() {
        const { username } = this.state.username;
        const { password } = this.state.password;

      }
 /*
    saveData =async()=>{
        const {email,password} = this.state;
 
        //save data with asyncstorage
        let loginDetails={
            email: email,
            password: password
        }
 
        if(this.props.type !== 'Login')
        {
            AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
 
            Keyboard.dismiss();
            alert("You successfully registered. Email: " + email + ' password: ' + password);
            this.login();
        }
        else if(this.props.type == 'Login')
        {
            try{
                let loginDetails = await AsyncStorage.getItem('loginDetails');
                let ld = JSON.parse(loginDetails);
 
                if (ld.email != null && ld.password != null)
                {
                    if (ld.email == email && ld.password == password)
                    {
                        alert('Go in!');
                    }
                    else
                    {
                        alert('Email and Password does not exist!');
                    }
                }
 
            }catch(error)
            {
                alert(error);
            }
        }
    }
 
    showData = async()=>{
        let loginDetails = await AsyncStorage.getItem('loginDetails');
        let ld = JSON.parse(loginDetails);
        alert('email: '+ ld.email + ' ' + 'password: ' + ld.password);
    }
 */
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