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
const TempletModel = ({
  visi,
  NextState = () => {},
  close = () => {},
  ...props
}) => {

  //    console.log('virendra......',selector);
  const [customerId,setCustomerId]=useState('');
  const [address,setAddress]=useState('');
  const [parceltype,setParceltype]=useState('');
  const[weight,setWeight]=useState('');
  const [deliveryperson,setDeliveryperson]=useState('');
  const [mobile,setMobile]=useState('')
const navigation=useNavigation()
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
            {'Add Delivery Person Details'}
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
            <Text style={styles.Text1}>Delivery Person Name</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Delivery Person Name"
               placeholderTextColor="#8a8a87"
                value={weight}
                onChangeText={val => setWeight(val)}
              />
            </View>
          </View>
        
          <View style={styles.main}>
            <Text style={styles.Text1}>Delivery Person Address</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Delivery Person Address"
               placeholderTextColor="#8a8a87"
                value={address}
                onChangeText={val => setAddress(val)}
              />
            </View>
          </View>
         
          <View style={styles.main}>
            <Text style={styles.Text1}>Delivery Person Email Addrees</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Delivery Person Email"
               placeholderTextColor="#8a8a87"
                value={weight}
                onChangeText={val => setWeight(val)}
              />
            </View>
          </View>
         
          <View style={styles.main}>
            <Text style={styles.Text1}>Delivery Person Mobile No.</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Mobile Number"
               placeholderTextColor="#8a8a87"
                keyboardType='numeric'
                value={weight}
                onChangeText={val => setMobile(val)}
              />
            </View>
          </View>

          <View style={styles.main}>
            <Text style={styles.Text1}>City</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter City"
               placeholderTextColor="#8a8a87"
                keyboardType='numeric'
                value={weight}
                onChangeText={val => setMobile(val)}
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
                value={weight}
                onChangeText={val => setMobile(val)}
              />
            </View>
          </View>
         
          </View>

          <LinearGradient colors={['#151a4b', '#4b81e6','#151a4b' ]} 
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.7 }}
                    style={styles.button1}>
                    <TouchableOpacity
                      onPress={() => close()}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Submit</Text>
                     
                    </TouchableOpacity>
                    </LinearGradient>
          {/* <View style={styles.button1}>
          
          <TouchableOpacity
              style={styles.button}
              underlayColor={'#e0a42a'}
              onPress={() => close()}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> */}
            {/* <TouchableHighlight
              style={styles.button}
              underlayColor={'#e0a42a'}
              onPress={() =>NextState()
              }>
              <Text style={styles.buttonText}>Add Delivery Address</Text>
            </TouchableHighlight> */}
          {/* </View>
           */}
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
