import React, { Component } from 'react';
import {AsyncStorage, Platform, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';

import styles from "../styles";
import {all_model_data, all_logo} from "../images";
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {Brand:"", Model: "", Year:"", Part:"", Location:"", CurrentCar:""};
  }

async componentDidMount() {
  let strArray =[];
  console.log("!!!try get data from Home storage ");
    try {
      const item1 = await AsyncStorage.getItem("Brand");
      this.setState({Brand:item1});
      strArray.push(item1);
      const item2 = await AsyncStorage.getItem("Model");
      this.setState({Model:item2});
      strArray.push(item2);
      const item3 = await AsyncStorage.getItem("Year");
      this.setState({Year:item3});
      strArray.push(item3);
      if (this.ifCarExist(item1,item2,item3)){
        let strTemp = strArray.join(" ");
        this.setState({CurrentCar:strTemp});
      }else{
        this.setState({Brand:"", CurrentCar:""});
      }
    } catch(e) {
      console.log("error get data", e);
    } try {
      const item = await AsyncStorage.getItem("Part");
      this.setState({Part:item});
    } catch(e) {
      console.log("error get data", e);
    } try {
      const item = await AsyncStorage.getItem("Location");
      this.setState({Location:item});
        console.log("get data loc", item);
      strArray.push(" in "+item);
      console.log("get data brand ", item);
    } catch(e) {
      console.log("error get data", e);
    }
}

  // componentDidMount() {
  //   this.subs = [this.props.navigation.addListener('willFocus', () => { }),];
  // }
  // componentWillUnmount () {
  //   this.subs.forEach(sub => sub.remove());
  // }

    async setKey(key,data) {
    try {
      await AsyncStorage.setItem(key, data);
      console.log("set data ok");
    } catch (e) {
      console.log("error set data", e);
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

  async getKey(key) {
      try {
        let status = await AsyncStorage.getItem(key);
        if (status == null) {
          status = false
        }
        //this.setState({ isChecked: (status == 'true') })
        console.log("get data", key," ",status);
      } catch(e) {
        console.log("error get data", e);
      }
    }

  showMenu(){
    let menuList = [];
    if (this.state.CurrentCar==""){
      menuList.push("Brand");
    }else{
      menuList.push("CurrentCar");
    }
    menuList.push("Location");
    return menuList.map((key)=>{
      let index = Math.random().toString(9);
    //  console.log("key=",key)
      if (!this.state[key]){
        let text = "Please provide your "+key;
        //console.log("!!!unknow==",this.state)
        return (
            <TouchableHighlight key={index} style={styles.button} onPress={() => this.props.navigation.navigate(key)} >
              <View  style={styles.btnView}>
              <Image source={require('../img/question-mark-button32.png')} />
                <Text style={styles.btnText}>{text}</Text>
              </View>
            </TouchableHighlight>
          )
        } else{
          let navItem = key;
          if (key=="CurrentCar"){
            navItem ="Brand"
          //   if (this.state["Brand"] != "" && this.state["Brand"] != null ){
          // //  console.log("!!!++11",this.state)
          //   if (this.state["Model"] != "" && this.state["Model"] != null){
          //     console.log("!!!++22",this.state)
            return (
              <TouchableHighlight key={index} style={styles.button} onPress={() => this.props.navigation.navigate(navItem)} >
                <View  style={styles.btnView}>
                  <Image
                  style={styles.tmbCar}
                  source = {all_model_data[this.state["Brand"]][this.state["Model"]]["imgScr"]} />
                  <Text style={styles.btnText}>{this.state[key]}</Text>
                </View>
              </TouchableHighlight>
          )
        }
      }
    });
  //console.log("text anwr=",answer);
  }

  showMenuFind(){

    if(this.state.Part){
      // console.log("Log sssss",this.state.Part);
      let dd = this.state.Part;
      let item = all_logo.find(function (obj) {
         if(obj.title==dd){return obj}
       });
    //  console.log("Log part", item);
    if (item){
      return(
          <TouchableHighlight key="Part" style={styles.button} onPress={() => this.props.navigation.navigate("Part")} >
            <View  style={styles.btnView}>
            <Image style={styles.tmbCar} source={item.imgScr} />
              <Text style={styles.btnText}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )
      }
      }else{
        return(
            <TouchableHighlight key="Part" style={styles.button} onPress={() => this.props.navigation.navigate("Part")} >
              <View   style={styles.btnView}>
              <Image source={require('../img/question-mark-button32.png')} />
                <Text style={styles.btnText}>Part name</Text>
              </View>
            </TouchableHighlight>
        )
      }
  }

  showMenuResult(){
    console.log("result of search");
    dataArr = [
      {title:"Body ",text:"Spartan/ATK Engines Toyota 3UZFE 7/00-10", price:8000, currency:"USD", key: 'body', imgScr: require('../../img/atb.png')},
    ];
    return(
      <View >
       <FlatList
          data={dataArr}
          renderItem={({item}) => (
           <TouchableHighlight
             onPress={() => this.onPress(item.title)}
             // onShowUnderlay={separators.highlight}
             // onHideUnderlay={separators.unhighlight}
             >
             <View >
             <Image style={styles.tmbCar} source = {item.imgScr} />
               <Text style={{backgroundColor:'#EEEEE0', textAlign:'center'}} >{item.title}</Text>
             </View>
           </TouchableHighlight>
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
        </View>
      )
  }

  render() {
    //console.log("Log sssss",this.state,all_model_data["Alfa"]["4C"],"==");
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={{flex: 1}}>
          {this.showMenu()}
          {this.showMenuFind()}
           <Text style={{fontWeight: 'bold', textAlign:'center'}} >Search results:</Text>
          {this.showMenuResult()}
        </View>
      </View>
    );
  }
}


export default HomeScreen;
