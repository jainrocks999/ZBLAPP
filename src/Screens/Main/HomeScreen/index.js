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
import Menu from '../../../Assests/Icon/Menu.svg';
import Bell from '../../../Assests/Icon/Bell.svg';
import {ImageSlider} from 'react-native-image-slider-banner';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
// import CircleCross from "../../../assets/Icon/CircleCross.svg";
// import Call from "../../../assets/Icon/Call.svg";
// import Gmail from "../../../assets/Icon/Gmail.svg";
// import Whatsapp from "../../../assets/Icon/Whatsapp.svg";
import Image15 from '../../../Assests/Icon/box.svg';
import Image16 from '../../../Assests/HomeImage/image16.svg';
import Image17 from '../../../Assests/HomeImage/image17.svg';
import Image18 from '../../../Assests/HomeImage/image18.svg';
import Oip from '../../../Assests/Icon/OIP.svg';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
import {TextInput} from 'react-native-gesture-handler';
import storage from '../../../Component/StorageAsync';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(false);
  const [isPremium, setPremium] = useState(false);
  const [loader, setLoader] = useState(false);
  const [banner, setBanner] = useState([]);
  const [contact, setContact] = useState();
  const [showMember, setShowMember] = useState('');
  const onItemPress = async () => {
    const Token = await storage.getItem(storage.TOKEN);
    console.log('kddsjsdf', Token);
  };
  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#dae4f5']}
      style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Menu />
          {/* <Image
                        style={styles.img}
                        source={require('../../../Assests/menu.png')} />  */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          {/* <Bell /> */}
          <Image
            style={styles.img}
            source={require('../../../Assests/bell.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{paddingHorizontal: 20}}>
          <Text
            onPress={() => onItemPress()}
            style={{
              fontWeight: '700',
              color: '#151a4b',
              marginTop: hp(0),
              fontSize: hp(4.3),
              fontFamily: 'Acephimere',
            }}>
            {'Hello, \nAdmin'}
          </Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.cardV1t}>Overview</Text>
          <FlatList
            data={data2}
            numColumns={2}
            renderItem={({item, index}) => (
              <View style={styles.item1}>
                {/* <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => onItemPress(item.name)} */}
                <View style={styles.item}>
                  <View
                    style={{marginLeft: item.index == 0 ? hp(2.8) : hp(2.9)}}>
                    {item.img1}
                  </View>
                  <Text
                    style={[
                      styles.name,
                      {
                        textAlign: 'center',
                        fontSize: hp(2),
                        marginRight: wp(2.1),
                      },
                    ]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.name, {textAlign: 'center'}]}>
                    {item.img}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
          <Text style={styles.cardV1t}>Recent Order</Text>

          <FlatList
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity 
                onPress={()=>navigation.navigate('ParcelDetail')}
                  style={{
                    marginTop:10,
                    paddingHorizontal: 10,
                    // height:140,
                    paddingVertical:10,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    borderRadius: 8,
                    backgroundColor:'#fff',
            
                  }}>
               
                    <View style={{paddingHorizontal:5, marginTop: 10}}>
                    
                      <View style ={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#032e63',
                          fontWeight:'600'
                          
                        }}>
                        {item.name}
                      </Text>
                        <Text
                        style={{
                          fontSize: 13,
                          color: item.pick=='Delivered'?'green':'orange',
                          fontFamily: 'Acephimere',
                        }}>
                        {item.pick}
                      </Text>
                          
                      </View>
                      <View style={{flexDirection:'row',width:'100%'}}>
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
                       {item.city}
                      </Text></View>
                      
                      </View>

                      <View style={{flexDirection:'row',width:'100%'}}>
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
                       {item.Mobile}
                      </Text></View>
                      
                      </View>


<View style={{flexDirection:'row',width:'100%'}}>
                    <View style={{width:'25%',}}>

                    <Text style={{color:'#151a4b',fontSize:14}}>{'Date'}</Text>
                    </View>
                     <Text style={{color:'#151a4b',fontSize:14}}>:-</Text>
                    
                    <View style={{width:'70%',}}><Text
                        style={{
                          fontSize: 14,
                          color: 'grey',
                         marginLeft:wp(2)
                          // marginTop:hp(1)
                        }}>
                       {item.time}
                      </Text></View>
                      
                      </View>
                    </View>
                
                  
                </TouchableOpacity>
              )}
            />

        </View>
        <View style={[styles.view, {marginTop: hp(0)}]}>
          {/* <Text style={styles.cardV1t}>Over View</Text> */}
          <FlatList
            data={data6}
            numColumns={2}
            renderItem={({item, index}) => (
              <View style={styles.item1}>
                <View style={styles.item}>
                  <View style={{alignSelf: 'flex-start'}}>
                    <Image
                      style={{
                        height: 23,
                        width: 23,
                        tintColor: '#fff',
                        marginLeft: wp(6),
                        marginTop: hp(-5),
                      }}
                      source={item.img}
                    />
                  </View>
                  {/* {item.img} */}
                  <Text
                    style={[
                      styles.name,
                      {
                        textAlign: 'center',
                        fontSize: hp(2.4),
                        marginTop: hp(-1),
                      },
                    ]}>
                    {item.name}
                  </Text>
                  {/* <Text style={[styles.name, {textAlign: 'center'}]}>
                      {item.img}
                    </Text> */}
                </View>
              </View>
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
export default HomeScreen;
const images = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg',
  },
];

const data6 = [
  {
    img: require('../../../Assests/Banner/question.png'),
    name: 'Contact Us',
    pick: 'Picked',
  },
  {
    img: require('../../../Assests/Banner/about.png'),
    name: 'About Us   ',
    pick: 'Not Picked',
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

const data = [
  {
    image: '',
    name: 'RC Mahesh',
    city: 'juhu bridge  Mumbai Maharatsra 430001',
    Mobile:'9890886656',
    time: '12/09/2023',
    pick:'Delivered',
  },
  {
    image: '',
    name: 'Ronit Tester',
    city: 'Lakshmi Nagar  Pune Maharastra 486306',
    Mobile:'9890886656',
    time: '12/09/2023',
    pick:'Not Delivered',
  },
  {
    image: '',
    name: 'New customer',
    city: 'vijay Nagr indore Madhyapradesh 430001',
    Mobile:'9890886656',
    time: '12/09/2023',
    pick:'Delivered',
  },
  // {
  //     image: '',
  //     name: 'Mahesh',
  //     city: 'Mumbai',
  //     time: '17 Minutes ago',
  //     Mobile:'9890886656',
  //   },
  //   {
  //     image: '',
  //     name: 'Ronit Tester ZBL',
  //     city: 'Pune',
  //     Mobile:'9890886656',
  //     time: '17 Minutes ago',
  //   },
  //   {
  //     image: '',
  //     name: 'ZBL Customer',
  //     city: 'Madhyapradesh',
  //     time: '17 Minutes ago',
  //   },
];

const data2 = [
  {
    img1: <Oip />,
    img: '20              ',
    name: '   Todays Parcel\nRequests     ',
  },
  {
    img1: <Image15 />,
    img: '50             ',
    name: 'Total Parcel Delivered   ',
  },
  //   {
  //     img: <Image17 />,
  //     name: 'Parcel Creation \n request',
  //   },
  //   {
  //     img: <Image18 />,
  //     name: 'Parcel history',
  //   },
];
//  <View style={{ alignItems: 'flex-end' }}>
//     <Image
//         style={styles.img}
//         source={require('../../../Assests/HomeImage/image7.png')} />
// </View>
//  <View style={styles.slider}>

//      <ImageSlider

//        data={images}

//         autoPlay={true}
//         preview={false}
//         caroselImageContainerStyle={{
//             width:Dimensions.get('window').width,
//             // paddingRight:10,
//             marginRight:0
//         }}

//         caroselImageStyle={{
//             width: Dimensions.get('window').width-40,
//             height: 200,
//             justifyContent: 'space-between',
//             borderWidth: 1,
//             borderRadius: 20,
//              marginLeft:20,
//             // resizeMode:'center'
//         }}
//         indicatorContainerStyle={{
//             bottom: -35
//         }}
//         inActiveIndicatorStyle={{
//             backgroundColor: '#000000',
//             height: 8,
//             width: 8
//         }}
//         activeIndicatorStyle={{
//             backgroundColor: '#FCDA64',
//             height: 8,
//             width: 8
//         }}
//     />

// </View>
//  <View style={{ marginTop: -24 }}>
//     <Image style={styles.img1} source={require('../../../Assests/HomeImage/image8.png')} />
// </View>
