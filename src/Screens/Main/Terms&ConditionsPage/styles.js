import React from "react";
import { Platform, StyleSheet } from "react-native";
import { heightPercent as hp,widthPrecent as wp} from "../../../Component/Responsive";

export default StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingHorizontal:10,
      paddingBottom:hp(5),marginTop:hp(2.5)
      // backgroundColor: '#f5f5f5',
    },
    content: {
      backgroundColor: '#ffffff',
      paddingHorizontal: 10,
      paddingVertical:15,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: { height: 0, width: 0 },
      elevation: 5,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 10,
      color:'#4F8EF7'
    },
    text: {
      fontSize: 15,
      color: '#333333',
      lineHeight: 24,
      textAlign:'auto'
    },
   
    button1: {
  
      elevation: 8,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      height: hp(6.5),
      width: wp(47),
      borderRadius: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignSelf: 'center',
       marginTop: hp(2),
    },
    button: {
      // backgroundColor: '#151a4b',
      height:hp(6.3),
      borderRadius: 30,
      width:'99%',
      alignItems: 'center',
      alignSelf:'center',
      paddingHorizontal: 10,
      justifyContent: 'center',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    buttonText: {
      fontSize: 15,
      fontWeight: '500',
      color:'#fff'
      // fontFamily: 'Montserrat-SemiBold', 
    },
  });