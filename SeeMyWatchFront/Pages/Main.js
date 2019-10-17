import React from 'react';
import { StyleSheet, Text,TextInput, View , TouchableOpacity, Image,StatusBar} from 'react-native';


import RNPickerSelect from 'react-native-picker-select';



export default class Main extends React.Component{
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
        favSize: undefined,
        window: 1,
        items: [
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
        ],
        favMatiere: undefined,
        items2: [
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
        ],
        favColor: undefined,
        items3: [
            {
                label: 'Red',
                value: 'Red',
            },
            {
                label: 'Blak',
                value: 'Blak',
            },
            {
                label: 'White',
                value: 'White',
            },
        ],
        favImage: undefined,
        items4: [
            {
                label: '',
                value: '',
            },
            {
                label: '',
                value: '',
            },
            {
                label: '',
                value: '',
            },
        ],
    };
}

componentDidMount() {
    // if the component is using the optional `value` prop, the parent
    // has the abililty to both set the initial value and also update it
    setTimeout(() => {
        this.setState({
            favColor: 'red',
        });
    }, 1000);

    // parent can also update the `items` prop
    setTimeout(() => {
        this.setState({
            items: this.state.items.concat([{ value: 'purple', label: 'Purple' }]),
        });
    }, 2000);
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
                items={this.state.items}
                onValueChange={(value) => {
                    this.setState({
                        favSise: value,
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
                items={this.state.items2}
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
                items={this.state.items3}
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
            <RNPickerSelect
                placeholder={{
                    label: 'Select a cadran...',
                    value: null,
                }}
                items={this.state.items4}
                onValueChange={(value) => {
                    this.setState({
                        favImage: value,
                    });
                }}
                onUpArrow={() => {
                    this.inputRefs.picker.togglePicker();
                }}
                onDownArrow={() => {
                    this.inputRefs.company.focus();
                }}
                style={{ ...pickerSelectStyles }}
                value={this.state.favImage}
                ref={(el) => {
                    this.inputRefs.picker2 = el;
                }}
            />

            <View style={{ paddingVertical: 5 }} />

            <TouchableOpacity style={styles.button} > 
                    <Text style={styles.buttonText}  > Visualisez  </Text>
                </TouchableOpacity>

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
    paddingHorizontal: 10,
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
  paddingVertical: 12
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: 'white',
  textAlign: 'center'
},
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
