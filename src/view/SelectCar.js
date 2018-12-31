import React from 'react';
import {Platform, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectCar extends React.Component {

  onPress(item){
  // console.log("test brand");
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.replace('BrandView')} style={styles.button} >
          <View style={styles.btnView}>
          <Image source={require('../img/question-mark-button32.png')} />
          <Text style={styles.btnText}>  Select Brandgdgdfgdfgdfg</Text>
          </View>
        </TouchableHighlight>


        </View>
      </View>
      )
  }
};
