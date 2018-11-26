import React from 'react';
import { StatusBar,  Text, View, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';

import HomeScreen from "./src/view/HomeScreen";
import SelectCar from "./src/view/SelectCar";
import SelectBrand from "./src/view/SelectBrand";
import styles from "./src/styles";

// const client = axios.create({
//   baseURL: 'https://api.github.com',
//   responseType: 'json'
// });
//
// const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter);

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        CarsView: SelectCar,
        BrandView: SelectBrand
    },{
        initialRouteName:'Home'
    }
);

export default createAppContainer(AppNavigator);
