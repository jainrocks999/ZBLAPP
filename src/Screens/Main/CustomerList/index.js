

import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import Header from '../../../Component/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Adduser from'../../../Assests/Icon/add-user';
import TempletModel from '../../../Component/Model';
const CustomerList = ({route}) => {
 
  const navigation = useNavigation();
  const [templetmodel, setTempletModal] = useState(false);
  const [templetmodel1, setTempletModal1] = useState(false);
 const getDataFromChild=(data)=>{
  console.log('datata',data);
  setTempletModal(true);
      setTempletModal1(data)
 }
  return (
    <LinearGradient colors={['#dae4f5', '#dae4f5','#dae4f5' ]}  style={{ flex: 1 }}>
      <Header
        source={require('../../../Assests/L.png')}
        title={'Customer List'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView 
      contentContainerStyle={styles.scroll}>

      <TempletModel
          visi={templetmodel}
          close={() => setTempletModal(false)}
           sendDatatoParent={templetmodel1}
           
        />

    
        
          <View style= {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text
              style={{
                color: '#565656',
                fontFamily: 'Acephimere',
                marginLeft: 10,
                marginTop: 5,
              }}>
              { data== 1
                ? `${data.length} Customer`
                : `${data?.length} Customers`}
            </Text>
            
             <TouchableOpacity  style ={{marginTop:5}}
             onPress={()=>getDataFromChild('Add')}
             >
                <Adduser/>
             </TouchableOpacity>
            </View>
          
            <FlatList
              data={data}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <TouchableOpacity
                onPress={()=>getDataFromChild('Edit')}
                  style={{
                    marginTop:10,
                    paddingHorizontal: 10,
                    // height:140,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    borderRadius: 8,
                    backgroundColor:'#fff',
            
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        width: '30%',
                        height: 80,
                        backgroundColor: '#fff',
                        marginTop: 5,
                        borderRadius: 8,
                      }}>
                      <Image
                        style={{height: '100%', width: '100%'}}
                        resizeMode={'cover'}
                        source={
                          
                             require('../../../Assests/ZBL_logo.png')
                        }
                      />
                    </View>
                    <View style={{marginLeft: 20, marginTop: 20}}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#032e63',
                          fontFamily: 'Acephimere',
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: '#032e63',
                          fontFamily: 'Acephimere',
                        }}>
                        {item.city}
                      </Text>
                      <Text
                        style={{
                          fontSize: 11,
                          color: '#575757',
                          fontFamily: 'Acephimere',
                        }}>
                        {item.Timestamp}
                      </Text>
                     
                    </View>
                  </View>
                  
                </TouchableOpacity>
              )}
            />
        
        
      </ScrollView>
      
    </LinearGradient>
  );
};
export default CustomerList;
const data = [
    {
      image: '',
      name: 'RC Mahesh',
      city: 'Mumbai',
      time: '17 Minutes ago',
    },
    {
      image: '',
      name: 'RC Mahesh',
      city: 'Mumbai',
      time: '17 Minutes ago',
    },
    {
      image: '',
      name: 'RC Mahesh',
      city: 'Mumbai',
      time: '17 Minutes ago',
    },
    {
      image: '',
      name: 'Ronit Tester',
      city: 'Pune',
      time: '17 Minutes ago',
    },
    {
      image: '',
      name: 'New customer',
      city: 'Madhyapradesh',
      time: '17 Minutes ago',
    },
    {
        image: '',
        name: 'Mahesh',
        city: 'Mumbai',
        time: '17 Minutes ago',
      },
      {
        image: '',
        name: 'Ronit Tester ZBL',
        city: 'Pune',
        time: '17 Minutes ago',
      },
      {
        image: '',
        name: 'ZBL Customer',
        city: 'Madhyapradesh',
        time: '17 Minutes ago',
      },
  ];
  