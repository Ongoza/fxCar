import React from 'react';
import {AsyncStorage, TextInput, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectLocation extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {text:""};
  }

  async onPress(){
    try {
      await AsyncStorage.setItem("Location", this.state.text);
      console.log("set data ok ", this.state.text);
    } catch (e) {
      console.log("error set data", e);
    }
    // this.props.navigation.navigate('Home')
    this.props.navigation.replace('Home')
  }

  renderSeparator() {
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
    let data =[];
    for (var i = 1945; i < 2019; i++) {
      let num= i.toString();
      data.unshift({title:num, key:num });
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />

        <View>
        {this.renderSeparator()}
        <Text style={styles.btnText}>Please provide your location</Text>
        {this.renderSeparator()}
        <TextInput
             style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}
           />
           {this.renderSeparator()}

           <TouchableHighlight key="Save" style={styles.button} onPress={() => this.onPress()} >
             <View  style={styles.btnView}>
               <Text style={styles.btnText}>Save</Text>
             </View>
           </TouchableHighlight>
          </View>

        </View>)
  }
};
