import React from 'react';
import { StyleSheet, Text,TextInput, View , TouchableOpacity, Image,StatusBar} from 'react-native';

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
                label: 'Cuir',
                value: 'Cuir',
            },
            {
                label: 'Siliconne Large',
                value: 'Siliconne Large',
            },
            {
                label: 'Siliconne Fin',
                value: 'Siliconne Fin',
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
                color: "#FFFFFF",
                label: 'White',
                value: 'White',
            },
        ];
        this.dials = [
            {
                label: "Cadran1",
                img: require("../assets/cadrans/Cadran1.png")
            },
            {
                label: "Cadran2",
                img: require("../assets/cadrans/Cadran2.png")
            },
            {
                label: "Cadran3",
                img: require("../assets/cadrans/Cadran3.png")
            },
            {
                label: "Cadran4",
                img: require("../assets/cadrans/Cadran4.png")
            },
            {
                label: "Cadran5",
                img: require("../assets/cadrans/Cadran5.png")
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
            <View style={[styles.innerContainer, {flexDirection: 'row', alignItems: "center", justifyContent: "space-evenly"}]}>
              <Image source={item.img} style={{height: 90, width: 90}}/>
              <Text style={{ color: item.color}}>{getLabel(item)}</Text>
            </View>
          </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <View style={{ paddingVertical: 5 }} />

            
                <Text>What&rsquo;s your Size?</Text>
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

                <Text>Choisissiez la matière du bracelet?</Text>
                <RNPickerSelect
                    placeholder={{
                        label: 'Select a matiere...',
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

                <Text>Choisissiez la couleur du bracelet?</Text>
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
                <Text>Choisissiez le cadran?</Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
container: {
    marginTop:20,
    paddingTop: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 0,
},
logo:{
  width:150, 
            height: 150,
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
    borderColor: 'grey',
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
  clearButton: { backgroundColor: 'grey', borderRadius: 5, marginRight: 10, padding: 5 },
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
    backgroundColor: 'white',
    color: 'black',
},
});
