import React from 'react';
import {  Image,Text,View,  Animated,TouchableWithoutFeedback,}
 from 'react-native';

export default class ListItems extends React.Component{
    state = {
        animatedPress: new  Animated.Value(4)
    }
    animateIn(){
        Animated.timing(this.state.animatedPress,{
            toValue: 0.8,
            duration: 200
        }).start()
    }
    animateOut(){
        Animated.timing(this.state.animatedPress,{
            toValue: 1,
            duration:200
        }).start()
    }
    render(){
        const {itemWidth, IMAGE}= this.props
        console.log(this.props.image.name);
        return(
           <TouchableWithoutFeedback
            onPressIn = {() => {this.animateIn(); this.props.onPress(this.props.image.name)}}
            onPressOut = {() => this.animateOut()}
            >
                <Animated.View style={{
                        margin: 5,
                      /*  transform: [
                            {
                                scale: this.state.animatedPress
                            }
                        ]*/
                    }}>
                    <Image  style={{width: itemWidth, height: 100}} resizeMode="contain" source= {this.props.image.img}></Image>

                </Animated.View>
                
            </TouchableWithoutFeedback>   
                 
        )
    }

}

