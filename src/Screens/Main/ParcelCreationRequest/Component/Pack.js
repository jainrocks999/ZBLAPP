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
  TouchableHighlight,StyleSheet
} from 'react-native';

import {
    heightPercent as hp,widthPrecent as wp
  } from '../../../../Component/Responsive';
  
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
const TempletModel = ({
  parceltype,setParceltype,weight,setWeight
}) => {

  //    console.log('virendra......',selector);
  // const [customerId,setCustomerId]=useState('');
  // const [address,setAddress]=useState('');
 
  const [deliveryperson,setDeliveryperson]=useState('');
  const [mobile,setMobile]=useState('')
const navigation=useNavigation()
  return (
    <View style={[styles.container1, {flex:1}]}>
    
    <View style={styles.card}>
    <View style={[styles.main,{}]}>
<Text style={styles.Text12}>Package Details</Text>    
</View>
<View style={{borderBottomWidth:1,width:'94%',alignSelf:'center'}}/>

    <View style={styles.main}>
            <Text style={styles.Text1}>Select Package Type</Text>
            <View style={styles.main1}>
           
                    <Dropdown
                      style={{
                        color: '#151a4b',
                        width: '100%',
                        // paddingHorizontal: 15
                        marginBottom: -1,
                        height: 40,
                        // marginTop: 5
                      }}
                      // renderInputSearch={renderInputSearch}
                      placeholderStyle={{
                        color: '#8a8a87',
                        width: '100%',
                       // fontWeight: '600',
                        // alignSelf: 'center',
                        fontFamily: 'Acephimere',
                        fontSize: 14,
                      }}
                      selectedTextStyle={{
                        color: '#151a4b',
                        width: '100%',
                        alignSelf: 'center',
                        fontFamily: 'Acephimere',
                        fontSize: 15,
                      }}
                      mode="default"
                      iconStyle={{tintColor: '#474747'}}
                      data={Data1}
                      inputSearchStyle={{
                        borderRadius: 10,
                        color: '#474747',
                        backgroundColor: '#f0f0f0',
                      }}
                    //   dropdownPosition={lenght > 0 ? 'top' : null}
                      itemTextStyle={{color: '#474747'}}
                      itemContainerStyle={{marginBottom: -15}}
                      searchPlaceholder="search.."
                      maxHeight={200}
                      search
                      labelField="label"
                      valueField="value"
                      placeholder="Select Package Type"
                      value={parceltype}
                      onChange={item => {
                      setParceltype(item.value);
                      }}
                    />
                 
        
            </View>
          </View>
    <View style={styles.main}>
            <Text style={styles.Text1}>Package Weight</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Package Weight"
               placeholderTextColor="#8a8a87"
                value={weight}
                onChangeText={val => setWeight(val)}
              />
            </View>
          </View>

    </View>

        
    
    
    </View>
  );
};
export default TempletModel;
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
    
  Text1: {
    fontWeight: '500',
    color: '#151a4b',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Acephimere',
  },
  Text12:{      fontWeight: '600',
    color: '#151a4b',
    marginBottom: 10,
    
    fontSize: 18,
    fontFamily: 'Acephimere',},
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
      paddingHorizontal: 5,
      paddingVertical: 10,
      paddingBottom: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      marginTop:hp(4)
    },
   
    main: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 0,
      },
      main1: {
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderColor: 'grey',
      }, 
    
  });
  


const Data1 = [
   
    {label: 'Bill', value: 'Bill'},
    {label: 'Non Bill', value: 'Non Bill'},
  ];