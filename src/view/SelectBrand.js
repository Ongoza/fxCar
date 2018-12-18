import React from 'react';
import {AsyncStorage, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectBrand extends React.Component {

  async onPress(item){
    try {
      await AsyncStorage.setItem("Brand_temp", item.title);
      await AsyncStorage.setItem("Model_temp", "");
      await AsyncStorage.setItem("Year_temp", "");
      console.log("set data ok");
    } catch (e) {
      console.log("error set data", e);
    }
    this.props.navigation.navigate('Model')
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          //marginLeft: "14%"
        }}
      />
    );
  };

  render(){
    let brand_data = [
      {title:"Alfa",key: 'Alfa', imgScr: require("../img/car_logo_Alfa.png"),active:1},
      {title:"Audi",key: 'Audi',imgScr: require("../img/car_logo_Audi.png"),active:0},
      // {title:"BMW",key: 'BMW',imgScr: require("../img/car_logo_BMW.png"),active:0},
      // {title:"Chevrolet",key: 'Chevrolet',imgScr: require("../img/car_logo_Chevrolet.png"),active:0},
      // {title:"Citroen",key: 'Citroen',imgScr: require("../img/car_logo_Citroen.png"),active:0},
      // {title:"Fiat",key: 'Fiat',imgScr: require("../img/car_logo_Fiat.png"),active:0},
      // {title:"Ford",key: 'Ford',imgScr: require("../img/car_logo_Ford.png"),active:0},
      // {title:"Honda",key: 'Honda',imgScr: require("../img/car_logo_Honda.png"),active:0},
      // {title:"Hyundai",key: 'Hyundai',imgScr: require("../img/car_logo_Hyundai.png"),active:0},
      // {title:"Infiniti",key: 'Infiniti',imgScr: require("../img/car_logo_Infiniti.png"),active:0},
      // {title:"Jaguar",key: 'Jaguar',imgScr: require("../img/car_logo_Jaguar.png"),active:0},
      // {title:"Jeep",key: 'Jeep',imgScr: require("../img/car_logo_Jeep.png"),active:0},
      // {title:"KIA",key: 'KIA',imgScr: require("../img/car_logo_KIA.png"),active:0},
      // {title:"Lancia",key: 'Lancia',imgScr: require("../img/car_logo_Lancia.png"),active:0},
      // {title:"Land",key: 'Land',imgScr: require("../img/car_logo_Land.png"),active:0},
      // {title:"Lexus",key: 'Lexus',imgScr: require("../img/car_logo_Lexus.png"),active:0},
      // {title:"Mazda",key: 'Mazda',imgScr: require("../img/car_logo_Mazda.png"),active:0},
       {title:"Mercedes",key: 'Mercedes',imgScr: require("../img/car_logo_Mercedes.png"),active:0},
      // {title:"MG",key: 'MG',imgScr: require("../img/car_logo_MG.png"),active:0},
      // {title:"MINI",key: 'MINI',imgScr: require("../img/car_logo_MINI.png"),active:0},
      // {title:"Mitsubishi",key: 'Mitsubishi',imgScr: require("../img/car_logo_Mitsubishi.png"),active:0},
      // {title:"Nissan",key: 'Nissan',imgScr: require("../img/car_logo_Nissan.png"),active:0},
      // {title:"Opel",key: 'Opel',imgScr: require("../img/car_logo_Opel.png"),active:0},
      // {title:"Peugeot",key: 'Peugeot',imgScr: require("../img/car_logo_Peugeot.png"),active:0},
      // {title:"Porsche",key: 'Porsche',imgScr: require("../img/car_logo_Porsche.png"),active:0},
      // {title:"Renault",key: 'Renault',imgScr: require("../img/car_logo_Renault.png"),active:0},
      // {title:"Seat",key: 'Seat',imgScr: require("../img/car_logo_Seat.png"),active:0},
      // {title:"Skoda",key: 'Skoda',imgScr: require("../img/car_logo_Skoda.png"),active:0},
      // {title:"Subaru",key: 'Subaru',imgScr: require("../img/car_logo_Subaru.png"),active:0},
      // {title:"Toyota",key: 'Toyota',imgScr: require("../img/car_logo_Toyota.png"),active:0},
      // {title:"Volkswagen",key: 'Volkswagen',imgScr: require("../img/car_logo_Volkswagen.png"),active:0},
      // {title:"Volvo",key: 'Volvo',imgScr: require("../img/car_logo_Volvo.png"),active:0},
    ];
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.btnView}>
         <FlatList
         style={styles.button}
            data={brand_data}
            renderItem={({item}) => (
             <TouchableHighlight
              style={styles.button}
               onPress={() => this.onPress(item)}
               // onShowUnderlay={separators.highlight}
               // onHideUnderlay={separators.unhighlight}
               >
               <View  style={styles.btnView}>
               <Image source = {item.imgScr} />
                 <Text style={styles.btnText}>{item.title}</Text>
               </View>
             </TouchableHighlight>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
          </View>
        </View>)
  }
};
