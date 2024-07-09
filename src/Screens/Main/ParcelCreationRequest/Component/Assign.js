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
import TempletModel from '../../../../Component/AddDeliveryBoy';
import {
    heightPercent as hp,widthPrecent as wp
  } from '../../../../Component/Responsive';
  import Adduser from'../../../../Assests/Icon/add-user'; 
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
const Assign = ({deliveryperson,setDeliveryperson}) => {
  const [mobile,setMobile]=useState('')
const navigation=useNavigation()
const [templetmodel, setTempletModal] = useState(false);
  return (
    <View style={[styles.container1, {flex:1,marginTop:hp(4)}]}>
    <TempletModel
          visi={templetmodel}
          NextState={()=>NextState()}
          close={() => setTempletModal(false)}
        //   sendDatatoParent={getDataFromChild}
        />
    <View style={styles.card}>
    <View style={[styles.main,{flexDirection:'row',justifyContent:'space-between'}]}>
<Text style={styles.Text12}>Assign Delivery Person</Text>  
<TouchableOpacity 
             onPress={()=>setTempletModal(true)}
             >
                <Adduser/>
             </TouchableOpacity>     
</View>

<View style={{borderBottomWidth:1,width:'94%',alignSelf:'center'}}/>
    <View style={styles.main}>
            <Text style={styles.Text1}>Select Delivery Person</Text>
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
                        color: '#474747',
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
                      placeholder="Select Delivery Person"
                      value={deliveryperson}
                      onChange={item => {
                        setMobile(item.mobileNo)
                        setDeliveryperson(item.value);
                      }}
                    />
                 
        
            </View>
          </View>
    <View style={styles.main}>
            <Text style={styles.Text1}>Mobile No. </Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
                placeholderTextColor="#474747"
                value={mobile}
                onChangeText={val =>setMobile(val)}
              />
            </View>
          </View>

    </View>

        
    
    
    </View>
  );
};
export default Assign;
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
    {label: 'Ramesh Delivery boy',value:'1', mobileNo: '9890886641',},
    {label: 'Mahesh ',value:'2',mobileNo: '9890886656',},
    {label: 'John Bill',value:'3',mobileNo: '9890886708'},
  ];