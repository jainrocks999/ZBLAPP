import React from "react";
import { Platform, StyleSheet } from "react-native";
import { heightPercent as hp,widthPrecent as wp} from "../../../Component/Responsive";

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#FFFFFF' 
    },
    header: { 
        height: 50, 
        width: '100%', 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 20 
    },
    title: {
        fontSize: 13,
        fontFamily: 'Montserrat-SemiBold',
      },
      prop: {
        backgroundColor: '#4b81e6',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      },  
   
    view: { 
        marginTop:hp(3), 
        paddingHorizontal: 10 ,
        
    },
    item: {
        backgroundColor: '#4b81e6',
        width: Platform.isPad?'47.4%':wp(40),

        height: hp(20),
        // alignItems: 'center',
        justifyContent: 'center',
        margin: 14,
        borderRadius: 15,
        shadowColor: '#FCDA64BF',
        shadowOpacity: 0.5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 20,
        elevation: 5,
    },
item1:{
    backgroundColor: '#fff',
    // width: Platform.isPad?'47.4%':'44%',
width:wp(40),
height: hp(20.3),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#FCDA64BF',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 20,
    elevation: 5,
},
    
    name: { 
        color: '#fff', 
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: 18,
        marginTop: 7 
    },
    modal: { 
        backgroundColor: '#FDEDB1', 
        // height: 125, 
        borderRadius: 16, 
        paddingLeft: 10, 
        width: '94%', 
        alignSelf: 'center' 
    },
    row: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    contact: { 
        fontSize: 16, 
        fontFamily: 'Montserrat-SemiBold', 
        color: '#000000', 
        marginTop: 20 
    },
    touch: { 
        marginRight: 5, 
        marginTop: -10 
    },
    view1: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginTop: 10, 
        paddingRight: 15 
    },
    touch1: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: 7 
    },
    text: { 
        marginTop: 0, 
        fontFamily: 'Montserrat-Medium', 
        color: '#000000', 
        fontSize: 14 
    },
 card:{
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {height: 0, width: 0},
    elevation: 2,
    borderRadius: 10,
    backgroundColor:'#fff',
    // backgroundColor: '#e0a42a',
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
    
})