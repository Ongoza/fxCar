import React from 'react';
import {AsyncStorage, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectModel extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { brand: ""};
  }

async componentDidMount() {
      try {
        const item = await AsyncStorage.getItem("Brand_temp");
      //  answer = JSON.parse(item);
        this.setState({brand:item});
        console.log("get data brand ", item);
      } catch(e) {
        console.log("error get data", e);
      }
    }
//
    async onPress(item){
      try {
        console.log("set data ",item);
        await AsyncStorage.setItem("Model_temp",item.title);
      } catch (e) {
        console.log("error set data", e);
      }
      this.props.navigation.navigate('Year')
    }

  render(){
    //console.log("get data brand render", this.state.brand);
    if(this.state.brand!=""){
      let all_model_data = {
        Alfa:[
          {title:"4C",key: '4C', imgScr: require("../img/car_pic_ALFA-ROMEO_4C.jpg"),active:1},
          {title:"4C-Spider",key: '4C-Spider',imgScr: require("../img/car_pic_ALFA-ROMEO_4C-Spider.jpg"),active:0},
          {title:"Giulia",key: 'Giulia',imgScr: require("../img/car_pic_ALFA-ROMEO_Giulia.jpg"),active:0},
          {title:"Giulia-Quadrifoglio-Verde",key: 'Giulia-Quadrifoglio-Verde',imgScr: require("../img/car_pic_ALFA-ROMEO_Giulia-Quadrifoglio-Verde.jpg"),active:0},
          {title:"Giulia-Veloce",key: 'Giulia-Veloce',imgScr: require("../img/car_pic_ALFA-ROMEO_Giulia-Veloce.jpg"),active:0},
          {title:"Giulietta",key: 'Giulietta', imgScr: require("../img/car_pic_ALFA-ROMEO_Giulietta.jpg"),active:1},
          {title:"MiTo",key: 'MiTo',imgScr: require("../img/car_pic_ALFA-ROMEO_MiTo.jpg"),active:0},
          {title:"Stelvio",key: 'Stelvio',imgScr: require("../img/car_pic_ALFA-ROMEO_Stelvio.jpg"),active:0},
          {title:"Stelvio-Quadrifoglio",key: 'Stelvio-Quadrifoglio',imgScr: require("../img/car_pic_ALFA-ROMEO_Stelvio-Quadrifoglio.jpg"),active:0},
        ],
        Audi:[
          {title:"A6-Avant",key: 'A6-Avant', imgScr: require("../img/car_pic_AUDI_A6-Avant.jpg"),active:1},
          {title:"A6",key: 'A6', imgScr: require("../img/car_pic_AUDI_A6.jpg"),active:1},
          {title:"e-tron",key: 'e-tron', imgScr: require("../img/car_pic_AUDI_e-tron.jpg"),active:1},
          {title:"Q3",key: 'Q3', imgScr: require("../img/car_pic_AUDI_Q3.jpg"),active:1},
          {title:"RS3-Sportback",key: 'RS3-Sportback', imgScr: require("../img/car_pic_AUDI_RS3-Sportback.jpg"),active:1},
          {title:"RS5-Sportback",key: 'RS5-Sportback', imgScr: require("../img/car_pic_AUDI_RS5-Sportback.jpg"),active:1},
          {title:"SQ5",key: 'SQ5', imgScr: require("../img/car_pic_AUDI_SQ5.jpg"),active:1},
        ],
        Mercedes:[
          {title:"AMG_CLS",key: 'AMG_CLS', imgScr: require("../img/car_pic_Mercedes-AMG_CLS.jpg"),active:1},
          {title:"A-Class",key: 'A-Class', imgScr: require("../img/car_pic_MERCEDES-BENZ_A-Class.jpg"),active:1},
          {title:"B-Class",key: 'B-Class', imgScr: require("../img/car_pic_MERCEDES-BENZ_B-Class.jpg"),active:1},
          {title:"C-Class",key: 'C-Class', imgScr: require("../img/car_pic_MERCEDES-BENZ_C-Class.jpg"),active:1},
          {title:"CLS-Class",key: 'CLS-Class', imgScr: require("../img/car_pic_MERCEDES-BENZ_CLS-Class.jpg"),active:1},
          {title:"EQC",key: 'EQC', imgScr: require("../img/car_pic_MERCEDES-BENZ_EQC.jpg"),active:1},
          {title:"G-CLass",key: 'G-CLass', imgScr: require("../img/car_pic_MERCEDES-BENZ_G-CLass.jpg"),active:1},
          {title:"GLA-AMG",key: 'GLA-AMG', imgScr: require("../img/car_pic_MERCEDES-BENZ_GLA-AMG.jpg"),active:1},
          {title:"GLE",key: 'GLE', imgScr: require("../img/car_pic_MERCEDES-BENZ_GLE.jpg"),active:1},
          {title:"S-63-AMG-Coupe",key: 'S-63-AMG-Coupe', imgScr: require("../img/car_pic_MERCEDES-BENZ_S-63-AMG-Coupe.jpg"),active:1},
          {title:"Maybach--X222",key: 'Maybach--X222', imgScr: require("../img/car_pic_MERCEDES-BENZ_S-Class-Maybach--X222.jpg"),active:1},
          {title:"V-Class",key: 'V-Class', imgScr: require("../img/car_pic_MERCEDES-BENZ_V-Class.jpg"),active:1},
        ]
      };
      let model_data = all_model_data[this.state.brand];

      return (
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <View style={styles.btnView}>
           <FlatList
              style={styles.button}
              data={ model_data}
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
  } else {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.btnView}>
        <Text style={styles.btnText}>Please wait</Text>
          </View>
        </View>
      )
    }
  }
}
