import React from 'react';
import {Modal, AsyncStorage, FlatList, StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from "../styles";

export default class SelectYear extends React.Component {
  state = {
    modalVisible: false,
    textModal: "",
    brand_temp:"",
    model_temp:"",
    year_temp:""
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  async componentDidMount() {
    let strArray =[];
    console.log("!!!try get data from Home storage ");
      try {
        const item1 = await AsyncStorage.getItem("Brand_temp");
        strArray.push(item1);
        const item2 = await AsyncStorage.getItem("Model_temp");
        strArray.push(item2);
        let strTemp = "Do you want save as a default car " + strArray.join(" ");
        console.log("strTemp",strTemp);
        this.setState({brand_temp:item1});
        this.setState({model_temp:item2});
        this.setState({textModal: strTemp});
      } catch(e) {
        console.log("error get data", e);
      }
  }

  onPress(item){
    console.log("item",item);
    this.setState({year_temp:item});
    let strTemp = this.state.textModal +" "+ item + "?"
    this.setState({textModal: strTemp});
    this.setModalVisible(true);
  }

  async onClose(tr){
    this.setModalVisible(false);
    if(tr){
      try{
        await AsyncStorage.setItem("Brand",this.state.brand_temp);
        await AsyncStorage.setItem("Model",this.state.model_temp);
        await AsyncStorage.setItem("Year",this.state.year_temp);
        console.log("save new item ",this.state.brand_temp,this.state.model_temp,this.state.year_temp);
      } catch(e){
        console.log("item replace error",e);
      }
      console.log("item replaced");
  }
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
    let data =[];
    for (var i = 1945; i < 2019; i++) {
      let num= i.toString();
      data.unshift({title:num, key:num });
    }
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={styles.btnView}>
          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View>
                <Text>{this.state.textModal}</Text>
                <View  style={styles.btnView}>
                  <TouchableHighlight  style={styles.buttonModal}
                    onPress={() => { this.onClose(false) }}>
                    <Text>Not</Text>
                  </TouchableHighlight>
                  <Text>     </Text>
                  <TouchableHighlight  style={styles.buttonModal}
                    onPress={() => { this.onClose(true) }}>
                    <Text>Yes</Text>
                  </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <FlatList
         style={styles.button}
            data={data}
            renderItem={({item}) => (
             <TouchableHighlight
              style={styles.button}
               onPress={() => this.onPress(item.title)}
               // onShowUnderlay={separators.highlight}
               // onHideUnderlay={separators.unhighlight}
               >
               <View  style={styles.btnView}>
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
