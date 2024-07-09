import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  LayoutAnimation,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import styles from './styles';
import User from '../../Assests/Icon/user.svg';
import DrawerLogo from '../../Assests/Icon/DrawerLogo.svg';
import Customerl from '../../Assests/Icon/customerl.svg';
import DrawerCross from '../../Assests/Icon/DrawerCross.svg';
import Courier from '../../Assests/Icon/courier.svg';
import Logout from '../../Assests/Icon/logout.svg';
import Icon from 'react-native-vector-icons/AntDesign';
import storage from '../StorageAsync';
const Drawer = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [userName, setUserName] = useState('');
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState('');
  const [memberId, setMemberId] = useState('');
  const [MemberDob, setMemberDob] = useState('');
  const [MemberContact, setMemberContact] = useState('');
  const [data, setData] = useState('');

  const manageEvents = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('customerList');
  };
  const managePartners = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('Delivery');
  };
  const manageOrder = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('ParcelCreate');
  };
  const manageLegal = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('Parcel');
  };

  const manageLegal1 = () => {
    // navigation.dispatch(DrawerActions.closeDrawer());
    setVisible(prev => !prev);
  };
  const manageProfile = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate('MyProfile');
  };
  const renderDate = date => {
    const d = new Date(date);
    let day = d.getDate();
    let year = d.getFullYear();
    if (day.length < 2) day = '0' + day;
    const month = d.getMonth() + 1;
    return (
      <Text
        numberOfLines={2}
        style={{
          fontSize: 14,
          color: '#000',
          fontFamily: 'Montserrat-Medium',
        }}>{`${year}-${month}-${day}`}</Text>
    );
  };

  const Logout1 = async () => {
    const Token = await storage.getItem(storage.TOKEN);
    if (Token) {
      await storage.setItem(storage.TOKEN, '');
      navigation.replace('Login');
    } else {
      Alert.alert('Not Logout', 'Please try Again');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{marginBottom: 50}}>
        <View style={styles.view}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{height: 50, width: 50, borderWidth: 2, borderRadius: 25}}>
              <Image
                style={{height: '100%', width: '100%'}}
                source={require('../../Assests/ZBL_logo1.png')}
              />
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <DrawerCross />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <User />
          <TouchableOpacity
            onPress={() => manageProfile()}
            style={{borderBottomWidth: 1, marginLeft: 6, borderColor: '#000'}}>
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                fontFamily: 'Montserrat-SemiBold',
              }}>
              {'Username'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingLeft: 15, marginTop: 0}}>
          {/* <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:15,color:'#000',fontFamily:'Montserrat-SemiBold'}}>{`Member ID : `}</Text>
                <Text style={{fontSize:14,color:'#000',fontFamily:'Montserrat-Medium'}}>{`ZBL-${data?.data?.member_id}`}</Text>
                </View> */}
        </View>

        <View style={styles.view1}>
          <View style={styles.icon}>
            <Customerl />
            <TouchableOpacity
              style={styles.toucha}
              onPress={() => manageEvents()}>
              <Text style={styles.same}>Customers list </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../Assests/delivery-man.png')}
            />
            <TouchableOpacity
              style={styles.toucha}
              onPress={() => managePartners()}>
              <Text style={[styles.same, {marginLeft: 15}]}>
                Delivery Person list
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <Image
              style={{height: 23, width: 20, marginLeft: 3}}
              source={require('../../Assests/Banner/Myorder.png')}
            />
            <TouchableOpacity
              style={styles.toucha}
              onPress={() => manageOrder()}>
              <Text style={styles.same}>Parcel Creation request</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <Image
              style={{height: 23, width: 20, marginLeft: 3}}
              source={require('../../Assests/Banner/Myorder.png')}
            />
            <TouchableOpacity
              style={styles.toucha}
              onPress={() => manageLegal()}>
              <Text style={styles.same}>Parcel history</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.icon}>
            <Image
              style={{height: 23, width: 20, marginLeft: 3}}
              source={require('../../Assests/Banner/Myorder.png')}
            />
            <TouchableOpacity
              style={[styles.toucha, {width: '90%'}]}
              onPress={() => manageLegal1()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text style={[styles.same, {}]}>{'Report'}</Text>

                {visible ? (
                  <Icon size={20} name="down" marginRight={10} />
                ) : (
                  <Icon size={20} name="right" marginRight={10} />
                )}
              </View>
            </TouchableOpacity>
          </View>
          {visible ? (
            <View style={{paddingHorizontal: 20}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  setVisible(prev => !prev);
                  navigation.navigate('AboutUs');
                }}
                style={{paddingHorizontal: 15, marginTop: 10}}>
                <Text style={[styles.same1, {margin: 5}]}>{'About us'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  setVisible(prev => !prev);
                  navigation.navigate('contactus');
                }}
                style={{paddingHorizontal: 15}}>
                <Text style={[styles.same1, {margin: 5}]}>{'Contact us'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  setVisible(prev => !prev);
                  navigation.navigate('PrivacyPolicy');
                }}
                style={{paddingHorizontal: 15}}>
                <Text style={[styles.same1, {margin: 5}]}>
                  {'Privacy&Pocily'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch(DrawerActions.closeDrawer());
                  setVisible(prev => !prev);
                  navigation.navigate('Terms&condition');
                }}
                style={{paddingHorizontal: 15}}>
                <Text style={[styles.same1, {margin: 5}]}>
                  {'Terms&Conditions'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.icon}>
            <Logout />

            <TouchableOpacity
              onPress={() => {
                // Alert.alert("Confirmation","Are you sure you want to sign out ")
                Alert.alert(
                  'Confirmation',
                  'Are you sure you want to sign out',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: 'OK',
                      onPress: () => {
                        Logout1();
                      },
                    },
                  ],
                );
              }}>
              <Text style={styles.same}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottom}>
        <Text style={styles.about}>Version 1.1</Text>
      </View>
      {/* <Modal isVisible={visible}>
                <View style={{ backgroundColor: '#FDEDB1', 
                    height: 360, 
                    borderRadius: 16, 
                    // paddingLeft: 20, 
                    width: '94%', 
                    alignSelf: 'center' }}>
                         <View style={styles.row}>
                        <View/>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            style={[styles.touch,{marginRight:20}]}>
                            <Download/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setVisible(false)}
                            style={styles.touch}>
                            
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                        <View style={{alignItems:'center'}}>
                         <ImageBackground
                         style={{height:300,width:'98%'}}
                        source={require('../../Assests/Icon/Background.png')}>

                        </ImageBackground>
                        </View>
                        </View>
                        </Modal> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default Drawer;
