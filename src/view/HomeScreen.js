import React from 'react';
import {Platform, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import { Provider, connect } from 'react-redux';

import styles from "../styles";
import store from "../../App";
export default class HomeScreen extends React.Component {

  selectCar(){

  };

  selectPart(){

  };

  selectLocation(){


  };

  render() {
    return (
      <Provider store={store}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.container}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CarsView')} style={styles.button} >
          <View style={styles.btnView}>
          <Image source={require('../img/question-mark-button32.png')} />
          <Text style={styles.btnText}>  Select your car model</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.selectPart()} style={styles.button} >
          <View style={styles.btnView}>
          <Image source={require('../img/question-mark-button32.png')} />
          <Text style={styles.btnText}>  Select your part model</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.selectLocation()} style={styles.button} >
          <View style={styles.btnView}>
          <Image source={require('../img/question-mark-button32.png')} />
          <Text style={styles.btnText}>  Your location</Text>
          </View>

        </TouchableHighlight>
        </View>
      </View>
      </Provider>
    );
  }
}
