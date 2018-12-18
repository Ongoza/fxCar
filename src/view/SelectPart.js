import React from 'react';
import {Modal, AsyncStorage, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";
import {all_model_data, all_logo} from "../images";

export default class SelectPart extends React.Component {
  state = {
    brand:"",
    model:"",
    year:""
  };

  async componentDidMount() {
    let strArray =[];
    console.log("!!!try get data from Home storage ");
      try {
        const item1 = await AsyncStorage.getItem("Brand");
        strArray.push(item1);
        const item2 = await AsyncStorage.getItem("Model");
        strArray.push(item2);
        const item3 = await AsyncStorage.getItem("Year");
        strArray.push(item3);
        let strTemp = "Default car " + strArray.join(" ");
        console.log("strTemp",strTemp);
        if (this.ifCarExist(item1,item2,item3)){
          this.setState({brand:item1});
          this.setState({model:item2});
          this.setState({year: item3});
        }else{
          this.props.navigation.navigate("Brand")
        }
      } catch(e) {
        console.log("error get data", e);
      }
  }

  ifCarExist(item1,item2,item3){
    console.log(item1,item2,item3);
    let tr = false;
    if(item1&&item2&&item3){
      if (item1 in all_model_data){
        if(item2 in all_model_data[item1]){
          console.log("data about a model is not empty.");
          tr=true;
        }
      }
    }
    return tr;
  }

  async onPress(item){
    try{
        await AsyncStorage.setItem("Part",item);
        console.log("save new item ", item);
      } catch(e){
        console.log("item replace error",e);
      }
      console.log("part replaced");
  this.props.navigation.replace('Home');
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
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View >
         <FlatList
            data={all_logo}
            numColumns={2}
            renderItem={({item}) => (
             <TouchableHighlight
               onPress={() => this.onPress(item.title)}
               // onShowUnderlay={separators.highlight}
               // onHideUnderlay={separators.unhighlight}
               >
               <View >
               <Image source = {item.imgScr} />
                 <Text style={{backgroundColor:'#AAAAAA', textAlign:'center'}} >{item.title}</Text>
               </View>
             </TouchableHighlight>
            )}
            ItemSeparatorComponent={this.renderSeparator}
          />
          </View>
        </View>)
  }
};
