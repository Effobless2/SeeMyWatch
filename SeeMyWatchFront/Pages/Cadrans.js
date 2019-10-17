
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, Image,View , Dimensions} from 'react-native';
import ListItems from '../Components/ListItems'

const ITEM_WIDTH = Dimensions.get('window').width
export default class Cadrans extends Component {
    constructor(props){
        super(props);
        this.state = {
        columns:3
        }
    }

    render() {
        const columns = this.state.columns;
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns= {columns}
                    data={[
                        require("../assets/cadrans/Cadran1.png"),
                        require("../assets/cadrans/Cadran2.png"),
                        require("../assets/cadrans/Cadran3.png"),
                        require("../assets/cadrans/Cadran4.png"),
                        require("../assets/cadrans/Cadran5.png"),
                    
                    ]}
                renderItem={({item})=>{
                    console.log(ITEM_WIDTH)
                 return  <ListItems itemWidth={ITEM_WIDTH/columns} image={item} />
                    
                }
                }
                
                keyExtractor={
                    (index)=>{return index}
                }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: 22,
flexDirection:'column',
justifyContent: "center",
alignItems:"center",
backgroundColor:'#F5FCFF',
},
item: {
    padding: 10,
    fontSize: 18,
    height: 44,
},
})


