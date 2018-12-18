import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/view/HomeScreen";
import SelectCar from "./src/view/SelectCar";
import SelectModel from "./src/view/SelectModel";
import SelectBrand from "./src/view/SelectBrand";
import SelectYear from "./src/view/SelectYear";
import SelectPart from "./src/view/SelectPart";
import SelectLocation from "./src/view/SelectLocation";
import styles from "./src/styles";


//const AppNavigator = createStackNavigator(AppRouteConfigs);
const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Brand: { screen: SelectBrand },
  Model: { screen: SelectModel },
  Car: { screen: SelectCar },
  Year: { screen: SelectYear },
  Location: { screen: SelectLocation },
  Part: { screen: SelectPart },
});

export default createAppContainer(AppNavigator);
