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
  sendDatatoParent,
  close = () => {},
  ...props
}) => {

  //    console.log('virendra......',selector);
  const [deliverypersonname,setDeliverypersonname]=useState('');
  const [address,setAddress]=useState('');
  const [email,setEmail]=useState('');
 const [city,setCity]=useState('');
 const [pincode,setPincode]=useState('');
  const [mobile,setMobile]=useState('')
const navigation=useNavigation()
const [errors, setErrors] = useState({});

// const validate = () => {
//   const newErrors = {};

//   if (!deliverypersonname) {
//     newErrors.deliverypersonname = 'Delivery person name is required';
//   }
//   if (!address) {
//     newErrors.address = 'Address is required';
//   }
//   if (!email) {
//     newErrors.email = 'Email is required';
//   } else if (!/\S+@\S+\.\S+/.test(email)) {
//     newErrors.email = 'Email is invalid';
//   }
//   if (!city) {
//     newErrors.city = 'City is required';
//   }
//   if (!pincode) {
//     newErrors.pincode = 'Pincode is required';
//   } else if (!/^[0-9]{6}$/.test(pincode)) {
//     newErrors.pincode = 'Pincode must be exactly 6 digits';
//   }
//   if (!mobile) {
//     newErrors.mobile = 'Mobile number is required';
//   } else if (!/^[0-9]{10}$/.test(mobile)) {
//     newErrors.mobile = 'Mobile number must be exactly 10 digits';
//   }

//   setErrors(newErrors);
//   return Object.keys(newErrors).length === 0;
// };



const validate = () => {
  const validationMessages = [
    { condition: !deliverypersonname, message: 'Delivery person name is required' },
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
    const formData = { deliverypersonname, address, email, city, pincode, mobile };
    console.log('Form Data:', formData);
    // Handle form submission here, such as sending data to an API
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
              { sendDatatoParent=='Add'? "Add Delivery Person Details":'Update Delivery Person Details'}
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
            <Text style={styles.Text1}>Delivery Person Name</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Delivery Person Name"
               placeholderTextColor="#8a8a87"
                value={deliverypersonname}
                onChangeText={val => setDeliverypersonname(val)}
              />
            </View>
          </View>
          {/* {errors.deliverypersonname && <Text style={styles.errorText}>{errors.deliverypersonname}</Text>} */}
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
          {/* {errors.address && <Text style={styles.errorText}>{errors.address}</Text>} */}
          <View style={styles.main}>
            <Text style={styles.Text1}>Delivery Person Email Address</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter Delivery Person Email"
               placeholderTextColor="#8a8a87"
                value={email}
                onChangeText={val => setEmail(val)}
              />
            </View>
          </View>
          {/* {errors.email && <Text style={styles.errorText}>{errors.email}</Text>} */}
          <View style={styles.main}>
            <Text style={styles.Text1}>Delivery Person Mobile No.</Text>
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
                placeholder="Enter City"
               placeholderTextColor="#8a8a87"
                // keyboardType='numeric'
                value={city}
                onChangeText={val => setCity(val)}
              />
            </View>
          </View>
          {/* {errors.city && <Text style={styles.errorText}>{errors.city}</Text>} */}
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
          {/* {errors.pincode && <Text style={styles.errorText}>{errors.pincode}</Text>} */}
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
                      <Text style={styles.buttonText}>{sendDatatoParent=='Add'?'Submit':'Update'}</Text>
                     
                    </TouchableOpacity>
                    </LinearGradient>
         
          
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
