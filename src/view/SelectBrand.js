import React from 'react';
import {Platform, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectBrand extends React.Component {

  onPress(item){

  }

  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.container}>
         <FlatList
            data={[{title:"first",key: 'a', imgScr: require("../img/car_logo_Alfa.png")}, {title:"second",key: 'b',imgScr: require("../img/car_logo_Audi.png")}]}
            renderItem={({item}) => (
             <TouchableHighlight
               onPress={() => this._onPress(item)}
               // onShowUnderlay={separators.highlight}
               // onHideUnderlay={separators.unhighlight}
               >
               <View style={{backgroundColor: 'white'}}>
               <Image source = {item.imgScr} />
                 <Text>{item.title}</Text>
               </View>
             </TouchableHighlight>
            )}

          />
          </View>
        </View>)
  }
};
