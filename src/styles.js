import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  btnView :{
    flexDirection:'row',
    flexWrap:'wrap',
  },
  buttonModal: {
    backgroundColor: '#DDDDDD',
     width:'30%',
    padding: 4
  },
  button: {
    marginTop: 2,
    backgroundColor: '#DDDDDD',
     width:'95%',
    padding: 10,
     borderRadius:10,
  },
  btnText:{
    marginLeft: 18,
    textAlignVertical: "center",
    justifyContent: 'flex-start'
  },
 textLst:{
   textAlignVertical: "center",
   justifyContent: 'center'
 },
 tmbCar:{
   alignSelf: 'center',
   height: 25,
   width: 35,
   borderWidth: 1,
   borderRadius: 3
 },
});
