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
} from 'react-native';

import {
  heightPercent as hp,widthPrecent as wp
} from '../Responsive';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast'
const TempletModel = ({
  visi,
  sendDatatoParent,
  close = () => {},
  ...props
}) => {
  const [customername,setCustomerName]=useState('');
  const [address,setAddress]=useState('');
  const [email,setEmail]=useState('');
  const[mobile,setMobile]=useState('');
  const [city,setCity]=useState('');
  const [pincode,setPincode]=useState('')
const navigation=useNavigation()

const validate = () => {
  const validationMessages = [
    { condition: !customername, message: 'Customer name is required' },
    { condition: !address, message: 'Address is required' },
    { condition: !email, message: 'Email is required' },
    { condition: email && !/\S+@\S+\.\S+/.test(email), message: 'Email is invalid' },
    { condition: !mobile, message: 'Mobile number is required' },
    { condition: mobile && !/^[0-9]{10}$/.test(mobile), message: 'Mobile number must be exactly 10 digits' },
    { condition: !city, message: 'City is required' },
    { condition: !pincode, message: 'Pincode is required' },
    { condition: pincode && !/^[0-9]{6}$/.test(pincode), message: 'Pincode must be exactly 6 digits' }
  ];

  for (let { condition, message } of validationMessages) {
    if (condition) {
      Toast.show(message);
      return false;
    }
  }

  return true;
};

const handleSubmit = () => {
  if (validate()) {
    const formData = { customername, address, email, city, pincode, mobile };
    console.log('Form Data:', formData);
  }
};









  return (
    <View style={[styles.container1, {flex:1}]}>
      <Modal animationType="fade" transparent visible={visi}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(69, 71, 71,0.9)',
            justifyContent: 'center',
          }}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: hp(3),paddingHorizontal:wp(3)
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10,color:'#151a4b'}}>
               {sendDatatoParent=='Add'? 'Add Customer Details':'Update Customer Details'}
              </Text>
              <TouchableOpacity onPress={() => close()} style={styles.crossbtn}>
                <Text style={styles.xbtn}>X</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom: wp(3),paddingHorizontal:wp(2)}}>
              <View style={styles.modalText}>
                  
              </View>
              <View style={styles.card}>
              <View style={styles.main}>
            <Text style={styles.Text1}>Customer Name</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter customer name"
               placeholderTextColor="#8a8a87"
                value={customername}
                onChangeText={val => setCustomerName(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Customer Address</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter customer address"
               placeholderTextColor="#8a8a87"
                value={address}
                onChangeText={val => setAddress(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Customer Email Address</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Customer Email Address"
               placeholderTextColor="#8a8a87"
                value={email}
                onChangeText={val => setEmail(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Customer Mobile No.</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
               placeholderTextColor="#8a8a87"
                keyboardType='numeric'
                value={mobile}
                onChangeText={val => setMobile(val)}
              />
            </View>
          </View>
          {/* {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>} */}

          <View style={styles.main}>
            <Text style={styles.Text1}>City</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter City "
               placeholderTextColor="#8a8a87"
                // keyboardType='default'
                value={city}
                onChangeText={val => setCity(val)}
              />
            </View>
          </View>
          <View style={styles.main}>
            <Text style={styles.Text1}>Pincode</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Pincode"
               placeholderTextColor="#8a8a87"
                keyboardType='numeric'
                value={pincode}
                onChangeText={val => setPincode(val)}
              />
            </View>
          </View>
          </View>

          <LinearGradient colors={['#151a4b', '#4b81e6','#151a4b' ]} 
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.7 }}
                    style={styles.button1}>
                    <TouchableOpacity
                      onPress={() => handleSubmit()
                        //  navigation.replace('Home')
                       
                      }
                      style={styles.button}>
                      <Text style={styles.buttonText}>{sendDatatoParent=='Add'? "Submit":"Update"}</Text>
                     
                    </TouchableOpacity>
                    </LinearGradient>


          {/* <View style={styles.button1}>
          
          <TouchableOpacity
              style={styles.button}
              underlayColor={'#e0a42a'}
              onPress={() =>NextState()
              }>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> */}
            {/* <TouchableHighlight
              style={styles.button}
              underlayColor={'#e0a42a'}
              onPress={() =>NextState()
              }>
              <Text style={styles.buttonText}>Add Delivery Address</Text>
            </TouchableHighlight> */}
          {/* </View> */}
          
            </ScrollView>
            {/* <View style={styles.buttomv}>
            <TouchableOpacity
              onPress={() => close()}
              style={{
                height: hp(6.3),
                width: '99%',
                backgroundColor: '#151a4b',
                 alignSelf: 'center',
                // marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30,
                // marginBottom: hp(1),
              }}>
              <Text style={styles.xbtn}>Cancel</Text>
            </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default TempletModel;
const DropData = [
  {label: 'Cts.', value: 'Cts.'},
  {label: 'Gms.', value: 'Gms.'},
];
