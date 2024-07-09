import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
  ImageBackground,
} from 'react-native';
import Tracking from "../../../Component/TabComponent/Trackingorder"
import OrederDetail from '../../../Component/TabComponent/OrderDetails';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../../../Component/CustomHeader';
const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
        <Text>hellov</Text>
        </View>
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff' }} />
  );


  const renderScene = SceneMap({
    first: Tracking,
    second: OrederDetail,
  });

const ParcelDetail = () => {
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tracking Details' },
    { key: 'second', title: 'Order Details' },
  ]);


  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#dae4f5']}
      style={{flex: 1}}>
      <Header
        source={require('../../../Assests/L.png')}
        title={'Parcel Details'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1,paddingHorizontal:10,marginTop:hp(2)}}>

      <View style={[styles.card,{marginTop:10,marginBottom:10}]}>
<Text style={{
    fontWeight: '700',
    color: '#151a4b',
    marginTop: 0,
    fontSize: 16,
    fontFamily: 'Acephimere',
    // textDecorationLine:'underline'
  }}>Customer Details</Text>

<View style={{flexDirection:'row',width:'100%',marginTop:10}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Name'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'Ronit Tester'}
                      </Text></View>
                      
                      </View>




                      <View style={{flexDirection:'row',width:'100%',marginTop:5}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Address'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'Central Mumbai Maharastra 436001'}
                      </Text></View>
                      
                      </View>


  
                      <View style={{flexDirection:'row',width:'100%',marginTop:5}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Mobile No.'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                          marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {'8999229071'}
                      </Text></View>
                      
                      </View>
                     
                  

  
</View>
       

        <View style={{ marginTop:hp(2),
                    paddingHorizontal: 0,
                     height:hp(35),
                     paddingVertical:0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    borderRadius: 5,
                    backgroundColor:'#fff',
            }}>
 <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: wp(10) ,}}
    //   swipeEnabled={false}
      renderTabBar={props => (
        <TabBar
          indicatorStyle={{
            backgroundColor:'#fff',
            height: 3,
          }}
          renderLabel={({route, color, focused}) => (
            <Text
              style={[
                styles.title,
                {color: focused ? '#fff' : '#000000'},
              ]}>
              {route.title}
            </Text>
          )}
          {...props}
          style={styles.prop}
        />
      )}
    />

            </View>

   
         

        {/* </View> */}
        <View style={{height: hp(10)}} />
      </ScrollView>

      {/* <BottomTab
                onPress={() => setVisible(true)}
                showMember={showMember}
            /> */}
    </LinearGradient>
  );
};
export default ParcelDetail;


const data6 = [
  {
    img: require('../../../Assests/Banner/question.png'),
    name: 'Contact Us',
    pick:'Picked',
  },
  {
    img:require('../../../Assests/Banner/about.png'),
    name: 'About Us   ',
    pick:'Not Picked',
  },
//   {
//     img: <Image17 />,
//     name: 'Parcel Creation \n request',
//     pick:'Picked',
//   },
//   {
//     img: <Image18 />,
//     name: 'Parcel history',
//   },
];

