import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import {
    heightPercent as hp,widthPrecent as wp
  } from '../../Responsive';
  
import { useNavigation } from '@react-navigation/native';
const OrederDetail = () => {

  
const navigation=useNavigation()
  return (
    <View style={[styles.container1, {flex:1,marginTop:hp(2)}]}>
    
    <ScrollView style={{paddingHorizontal:15}}>
<View style={{}}>

<Text style={{
    fontWeight: '700',
    color: '#151a4b',
    marginTop: 0,
    fontSize: 16,
    fontFamily: 'Acephimere',
    // textDecorationLine:'underline'
  }}>Delivery Person Details</Text>

<View style={{flexDirection:'row',width:'100%',marginTop:10}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Name'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'Ronit Tester'}
                      </Text></View>
                      
                      </View>




                      <View style={{flexDirection:'row',width:'100%',marginTop:5}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Address'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'Central Mumbai Maharastra 436001'}
                      </Text></View>
                      
                      </View>


  
                      <View style={{flexDirection:'row',width:'100%',marginTop:5}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Mobile No.'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'8999229071'}
                      </Text></View>
                      
                      </View>
                     
                  

  
</View>



    </ScrollView>

         
    
    </View>
  );
};
export default OrederDetail;
const styles =StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: '#032e63',
      //alignItems:'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      flexDirection: 'row',
      paddingVertical: 20,
    },
    container1: {
      flex: 1,
      // backgroundColor: '#f0eeee',
    },
  
  
    card: {
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 8,
      shadowOffset: {height: 2, width: 0},
      elevation: 5,
      borderRadius: 10,
      backgroundColor: 'white',
      marginBottom: 0,
      paddingHorizontal: 15,
      paddingVertical: 10,
      paddingBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
    },
   
      
    img: {
      height: 25,
      width: 25,
      marginTop: 20,
    },
    text: {
      color: 'white',
      fontSize: 25,
      marginTop: 17,
      fontWeight: '600',
    },
  
  
  
   
    button1: {
      elevation: 8,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      height: hp(6.5),
      width: wp(45),
      borderRadius: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: hp(2),
    },
    button: {
      backgroundColor: '#fff',
      height: hp(6),
      borderRadius: 30,
      alignItems: 'center',
      paddingHorizontal: 10,
      justifyContent: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '500',
      // fontFamily: 'Montserrat-SemiBold', 
    },
    buttomv:{
      elevation: 8,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      height: hp(6.5),
      width: wp(30),
      borderRadius: 20,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: hp(2),
      marginBottom:hp(3)
    }
  });
  

