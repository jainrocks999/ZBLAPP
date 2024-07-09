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
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../../Component/Responsive';
import Adduser from '../../../../Assests/Icon/add-user';
import TempletModel from '../../../../Component/DevliveryAddress';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';
const Addrees = ({NextState,customerId,setCustomerId,address,setAddress}) => {
  //    console.log('virend,Customerid,ra......',selector);

 
  const [parceltype, setParceltype] = useState('');
  const [weight, setWeight] = useState('');
  const [deliveryperson, setDeliveryperson] = useState('');
  const [mobile, setMobile] = useState('');
  const navigation = useNavigation();
  const [templetmodel, setTempletModal] = useState(false);
  return (
    <View style={[{flex: 1, marginTop: hp(4)}]}>
      <TempletModel
        visi={templetmodel}
        NextState={() => NextState()}
        close={() => setTempletModal(false)}
        //   sendDatatoParent={getDataFromChild}
      />

      <View style={styles.card}>
        <View
          style={[
            styles.main,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <Text
            style={{
              fontWeight: '600',
              color: '#151a4b',
              marginBottom: 12,

              fontSize: 18,
              fontFamily: 'Acephimere',
            }}>
            Customer Details
          </Text>
          <TouchableOpacity onPress={() => setTempletModal(true)}>
            <Adduser />
          </TouchableOpacity>
        </View>
        <View
          style={{borderBottomWidth: 1, width: '94%', alignSelf: 'center'}}
        />
        <View style={styles.main}>
          <Text style={styles.Text1}>Select Customer Details</Text>
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
                //fontWeight: '600',
                // alignSelf: 'center',
                fontFamily: 'Acephimere',
                fontSize: 15,
              }}
              selectedTextStyle={{
                color: '#474747',
                width: '100%',
                // fontWeight: '600',
                // alignSelf: 'center',
                fontFamily: 'Acephimere',
                fontSize: 14,
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
              placeholder="Select Customer Details"
              value={customerId}
              onChange={item => {
                setCustomerId(item.value);
                setAddress(item.Addrees)
              }}
            />
          </View>
        </View>
        {customerId ? (
          <View
            style={[
              styles.card,
              {marginTop: hp(3), marginHorizontal: 10, borderWidth: 2},
            ]}>
            <Text
              style={{
                fontWeight: '700',
                color: '#151a4b',
                marginTop: 0,
                fontSize: 16,
                fontFamily: 'Acephimere',
                // textDecorationLine:'underline'
              }}>
              Customer Address
            </Text>

            <View style={{paddingHorizontal: 0}}>
              <View
                style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                <View style={{width: '25%'}}>
                  <Text style={{color: '#151a4b', fontSize: 14}}>
                    {'Address'}
                  </Text>
                </View>
                <Text style={{color: '#151a4b', fontSize: 14}}>:-</Text>

                <View style={{width: '70%'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'grey',
                      marginLeft: wp(2),
                      // marginTop:hp(1)
                    }}>
                    {address}
                  </Text>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', width: '100%', marginTop: 10}}>
                <View style={{width: '25%'}}>
                  <Text style={{color: '#151a4b', fontSize: 14}}>
                    {'Mobile No.'}
                  </Text>
                </View>
                <Text style={{color: '#151a4b', fontSize: 14}}>:-</Text>

                <View style={{width: '70%'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'grey',
                      marginLeft: wp(2),
                      // marginTop:hp(1)
                    }}>
                    {'8909776655'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : null}
     

      </View>
    </View>
  );
};
export default Addrees;
const styles = StyleSheet.create({
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
    paddingHorizontal: 5,
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

  main: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 0,
  },
  Text1: {
    fontWeight: '500',
    color: '#151a4b',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Acephimere',
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

  button1: {
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: hp(6.5),
    width: wp(65),
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
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    // fontFamily: 'Montserrat-SemiBold',
  },
  buttomv: {
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
    marginBottom: hp(3),
  },
});

const Data1 = [
  {label: 'Ramesh', value: '1',
   Addrees:'Central Mumbai Maharastra 436001'

  },
  {label: 'Ronit', value: '2',
    Addrees:'vijay nagar Indore MadhyaPradesh 452001'
  },
  {label: 'Admin', value: '3',
    Addrees:'Central Pune Maharastra 435401'
  },
];
