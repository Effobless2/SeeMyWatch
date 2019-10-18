import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
const { width: screenWidth } = Dimensions.get('window')

export default class MyCarousel extends Component {

    constructor(props){
        super(props);
        
        this.carouselDatas = [
            {url : require("../assets/carousel/IMG7.jpg")},
            {url : require("../assets/carousel/IMG2.jpg")},
            {url : require("../assets/carousel/IMG3.jpg")},
            {url : require("../assets/carousel/IMG4.jpg")},
            {url : require("../assets/carousel/IMG5.jpg")},
            {url : require("../assets/carousel/IMG6.jpg")},
            {url : require("../assets/carousel/IMG1.jpg")},
            {url : require("../assets/carousel/IMG8.jpg")},
            {url : require("../assets/carousel/IMG9.jpg")},
            {url : require("../assets/carousel/IMG10.jpg")},
            {url : require("../assets/carousel/IMG11.jpg")},
            {url : require("../assets/carousel/IMG12.jpg")},
            {url : require("../assets/carousel/IMG13.jpg")},
            {url : require("../assets/carousel/IMG14.jpg")},
        ]
    }
    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.url}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    render () {
        return (
            <Carousel
                style={styles.carousel}
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={this.carouselDatas}
                renderItem={this._renderItem}
                hasParallaxImages={true}
            />
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  
  carousel: {
    height: 50,
    width:  50
}
})