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
import Toast from 'react-native-simple-toast';
const TempletModel = ({
  visi,
  NextState = () => {},
  close = () => {},
  ...props
}) => {

  //    console.log('virendra......',selector);
  const [customername,setCustomername]=useState('');
  const [address,setAddress]=useState('');
  const [city,setCity]=useState('');
  const[email,setEmail]=useState('');
  const [pincode,setPincode]=useState('');
  const [mobile,setMobile]=useState('')
const navigation=useNavigation()




const validate = () => {
  const validationMessages = [
    { condition: !customername, message: 'Delivery person name is required' },
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
    console.log('Form Data:', formData,close());
    // Handle form submission here, such as sending data to an API
  close();
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
                marginBottom: hp(3),
              }}>
             
             <View style={{height: 55, width: '100%', backgroundColor: '#151a4b'}}>
        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
          <TouchableOpacity
           
            style={{
              paddingVertical: 8,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 5,
            }}
            delayPressIn={0}
            onPress={() => close()}>
            <Image
              style={{height: 18, width: 12}}
              source={require('../../Assests/L.png')}
            />
          </TouchableOpacity>

          <Text
            style={[
              {
                color: 'white',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginLeft: 15,
              },
            ]}>
            {'Add Customer Details'}
          </Text>
        </View>
      </View>



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
                onChangeText={val => setCustomername(val)}
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

          <View style={styles.main}>
            <Text style={styles.Text1}>City</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter City "
               placeholderTextColor="#8a8a87"
                // keyboardType='numeric'
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
                   onPress={()=> handleSubmit()}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Submit</Text>
                     
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
