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
import Image15 from '../../../Assests/Icon/delivered.svg';
import Image16 from '../../../Assests/HomeImage/image16.svg';
import Image17 from '../../../Assests/HomeImage/image17.svg';
import Image18 from '../../../Assests/HomeImage/image18.svg';
import Oip from '../../../Assests/Icon/OIP.svg'
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
import {TextInput} from 'react-native-gesture-handler';
import Header from '../../../Component/CustomHeader';

const ParcelHistory = () => {
  const navigation = useNavigation();
  const [isVisible, setVisible] = useState(false);
  const [isPremium, setPremium] = useState(false);
  const [loader, setLoader] = useState(false);
  const [banner, setBanner] = useState([]);
  const [contact, setContact] = useState();
  const [showMember, setShowMember] = useState('');

  const onItemPress = title => {
    console.log('kddsjsdf', title);
    if (title == 'Customers list') {
      navigation.navigate('customerList');
    } else if (title == 'Delivery Person List') {
      navigation.navigate('Delivery');
    } else if (title == 'Parcel Creation \n request') {
      navigation.navigate('ParcelCreate');
    } else if (title == 'Become a Member') {
      navigation.navigate('BecomeAMember');
    }
  };
  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#dae4f5']}
      style={{flex: 1}}>
      <Header
        source={require('../../../Assests/L.png')}
        title={'Parcel History'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={{flex: 1}}>

        <View style={{paddingHorizontal: 20}}>
         {/* <Text style={{
    fontWeight: '700',
    color: '#151a4b',
    marginTop: hp(0),
    fontSize: hp(4.3),
    fontFamily: 'Acephimere',
  }}>{'Hello, \nAdmin'}</Text> */}
       
        </View>
       

         
          <View style={{paddingHorizontal:15,paddingVertical:20}}>
          <Text style={styles.cardV1t}>Parcel History</Text>
          

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
export default ParcelHistory;


const data6 = [
  {
    img: require('../../../Assests/Banner/question.png'),
    name: 'Contact Us',
    pick:'Delivered',
  },
  {
    img:require('../../../Assests/Banner/about.png'),
    name: 'About Us   ',
    pick:'Not Delivered',
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
    {
        image: '',
        name: 'Mahesh',
        city: 'Mumbai',
        time: '12/09/2023',
        pick:'Not Delivered',
        Mobile:'9890886656',
      },
      {
        image: '',
        name: 'Ronit Tester ZBL',
        city: 'Pune',
        time: '12/09/2023',
        pick:'Delivered',
        Mobile:'9890886656',
      },
      {
        image: '',
        name: 'ZBL Customer',
        city: 'Madhyapradesh',
        time: '12/09/2023',
        pick:'Not Delivered',
        Mobile:'9890886656',
      },
  ];
  

const data2 = [
  { img1:<Oip/>,
    img: '20               ',
    name: '    Todays Parcel\nRequests ',
   
  },
  { img1:<Image15/>,
    img: '50               ',
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
