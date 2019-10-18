import React from 'react';
import { StyleSheet, Text,TextInput, View , TouchableOpacity, Image,StatusBar} from 'react-native';
import ServerAPI from '../store/serverAPI';

import {CustomPicker} from 'react-native-custom-picker';
import RNPickerSelect from 'react-native-picker-select';



export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.sizes = [
            {
                label: 'S',
                value: 'S',
            },
            {
                label: 'M',
                value: 'M',
            },
            {
                label: 'L',
                value: 'L',
            },
        ];
        this.materials = [
            {
                label: 'Leather',
                value: 'Leather',
            },
            {
                label: 'Wide Silicone',
                value: 'Wide Silicone',
            },
            {
                label: 'Thin Silicone',
                value: 'Thin Silicone',
            },
        ];
        this.colours = [
            {
                color: "#FF0000",
                label: 'Red',
                value: 'Red',
            },
            {
                color: "#000000",
                label: 'Black',
                value: 'Black',
            },
            {
                color: "#000000",
                label: 'White',
                value: 'White',
            },
            {
                color: "pink",
                label: 'Pink',
                value: 'Pink',
            },
            {
                color: "gold",
                label: 'Gold',
                value: 'Gold',
            },
            {
                color: "silver",
                label: 'Silver',
                value: 'Silver',
            },
            {
                color: "orange",
                label: 'Orange',
                value: 'Orange',
            },
        ];
        this.dials = [
            {
                label: "White",
                img: require("../assets/cadrans/Cadran1.png")
            },
            {
                label: "Black White",
                img: require("../assets/cadrans/Cadran2.png")
            },
            {
                label: "Orange White",
                img: require("../assets/cadrans/Cadran3.png")
            },
            {
                label: "Red White",
                img: require("../assets/cadrans/Cadran4.png")
            },
            {
                label: "Blue White",
                img: require("../assets/cadrans/Cadran5.png")
            },
            {
                label: "Kaki White",
                img: require("../assets/cadrans/Cadran6.png")
            },
            {
                label: "Turquoise Green",
                img: require("../assets/cadrans/Cadran7.png")
            },
            {
                label: "Green",
                img: require("../assets/cadrans/Cadran8.png")
            },
            {
                label: "Gold",
                img: require("../assets/cadrans/Cadran9.png")
            },
            {
                label: "Orange",
                img: require("../assets/cadrans/Cadran10.png")
            },
            {
                label: "Brick",
                img: require("../assets/cadrans/Cadran11.png")
            },
            {
                label: "Burgundy",
                img: require("../assets/cadrans/Cadran12.png")
            },
            {
                label: "Blue",
                img: require("../assets/cadrans/Cadran13.png")
            },
            {
                label: "Gray",
                img: require("../assets/cadrans/Cadran15.png")
            },
            {
                label: "Purple",
                img: require("../assets/cadrans/Cadran16.png")
            },
            {
                label: "Ocean",
                img: require("../assets/cadrans/Cadran17.png")
            },
            {
                label: "Chocolate",
                img: require("../assets/cadrans/Cadran18.png")
            },
            {
                label: "Gradient Purlple White",
                img: require("../assets/cadrans/Cadran19.png")
            },
            {
                label: "Gradient Green",
                img: require("../assets/cadrans/Cadran20.png")
            },
            {
                label: "Gradient Purple",
                img: require("../assets/cadrans/Cadran21.png")
            },
            {
                label: "Gradient Blue",
                img: require("../assets/cadrans/Cadran22.png")
            },
            {
                label: "Gradient Gray",
                img: require("../assets/cadrans/Cadran23.png")
            },
            {
                label: "Gradient Dark",
                img: require("../assets/cadrans/Cadran24.png")
            },
            {
                label: "Gradient Brick",
                img: require("../assets/cadrans/Cadran25.png")
            },
            {
                label: "Gradient Chocolate",
                img: require("../assets/cadrans/Cadran26.png")
            },
            {
                label: "Gradient Gold",
                img: require("../assets/cadrans/Cadran27.png")
            },
            {
                label: "Gradient Red",
                img: require("../assets/cadrans/Cadran28.png")
            }
        ]

        this.inputRefs = {};

        this.state = {
            favSize: null,
            window: 1,
            favMatiere: null,
            favColor: null,
            favDial: null,
        };
    }

    async buy() {
        let result = await ServerAPI.Custom(this.state.favSize, this.state.favMatiere, this.state.favColor, this.state.favColor);
        if(result == 200){
            alert("Votre commande a bien été ajoutée à votre panier !");
        }
    }

    renderField(settings) {
        console.log(settings);
        const { selectedItem, defaultText, getLabel, clear } = settings
        return (
          <View style={styles.container}>
            <View>
              {!selectedItem && <Text style={[styles.text, { color: 'grey' }]}>{defaultText}</Text>}
              {selectedItem && (
                <View style={[styles.innerContainer, {flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly"}]}>
                  <Image source={selectedItem.img} style={styles.selectedDial}/>
                  <Text style={{ color: selectedItem.color}}>
                    {getLabel(selectedItem)}
                  </Text>
                </View>
              )}
            </View>
          </View>
        )
      }
 
    renderOption(settings) {
        const { item, getLabel } = settings
        return (
          <View style={styles.optionContainer}>
            <View style={[styles.innerContainer, {flexDirection: 'row', alignItems: "center", justifyContent: "space-between"}]}>
              <Image source={item.img} style={{height: 90, width: 90}}/>
              <View style={{justifyContent: 'center'}}>
                <Text style={{ color: item.color}}>{getLabel(item)}</Text>
              </View>
            </View>
          </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: "center"}}>
                    <Image style={styles.logo} source={require('../assets/carousel/IMG7.jpg')} />
                </View>

            
                <Text style={styles.optionsLabel}>Choose your size:</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a size...',
                        value: null,
                    }}
                    items={this.sizes}
                    onValueChange={(value) => {
                        this.setState({
                            favSize: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favSize}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text style={styles.optionsLabel}>Choose your strap's material:</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a material...',
                        value: null,
                    }}
                    items={this.materials}
                    onValueChange={(value) => {
                        this.setState({
                            favMatiere: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favMatiere}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />

                <Text style={styles.optionsLabel}>Choose your strap's color:</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a color...',
                        value: null,
                    }}
                    items={this.colours}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.picker.togglePicker();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.company.focus();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                    ref={(el) => {
                        this.inputRefs.picker2 = el;
                    }}
                />

                <View style={{ paddingVertical: 5 }} />
                <Text style={styles.optionsLabel}>Choose your dial?</Text>
                <CustomPicker
                    placeholder={'Select a dial...'}
                    options={this.dials}
                    getLabel={item => item.label}
                    fieldTemplate={this.renderField}
                    optionTemplate={this.renderOption}
                    headerTemplate={this.renderHeader}
                    footerTemplate={this.renderFooter}
                    onValueChange={value => {
                        this.setState({favDial : value})
                    }}
                />

                <View>
                <View style={{height: 30}} />
                    
                <TouchableOpacity
                    title="Ajouter au panier"
                    onPress={() =>this.buy()}
                    >
                        <View style={{flexDirection: 'column', alignItems: "center"}}>
                            <Image source={require("../assets/kart.png")} style={styles.kart}/>
                            <Text>Add to cart!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{height: 200}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    height: "inherit",
    marginTop:20,
    paddingTop: 30,
    justifyContent: 'center',
    paddingHorizontal: 0,
},
logo:{
    width: "100%", 
    height: 120,
    justifyContent: "center",
},
button: {
  width: 300,
  backgroundColor: '#4f83cc',
  borderRadius: 25,
  marginVertical: 10,
  paddingVertical: 12,
  justifyContent: 'center',
},
Cadran: {
    width: 100,
    backgroundColor: '#4f53cc',
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
container: {
    borderWidth: 1,
    padding: 15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  optionInnerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  selectedDial: {
      width: 60,
      height: 60
  },
  kart: {
      width: 50,
      height: 50
  },
  optionsLabel: {
      color: '#4f83cc'
  }
});

const pickerSelectStyles = StyleSheet.create({
inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    //backgroundColor: 'white',
    color: 'black',
},
});
