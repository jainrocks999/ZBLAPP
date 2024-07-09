import {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';
import Header from '../../../Component/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Dropdown} from 'react-native-element-dropdown';
import TempletModel from '../../../Component/Model';
import Adduser from '../../../Assests/Icon/add-user';
import StepIndicator from 'react-native-step-indicator';
import Addrees from './Component/Address';
import Assign from './Component/Assign';
import Package from './Component/Pack';
import Summary from './Component/Summary';
import Icon from 'react-native-vector-icons/MaterialIcons';
const labels = ['Customer', 'Package', 'Assign', 'Summary'];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#4b81e6',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#4b81e6',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#4b81e6',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#4b81e6',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#4b81e6',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#4b81e6',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#4b81e6',
};
const ParcelCreate = ({route}) => {
  const navigation = useNavigation();

  const [address, setAddress] = useState('');
  const [parceltype, setParceltype] = useState('');
  const [weight, setWeight] = useState('');
  const [deliveryperson, setDeliveryperson] = useState('');
  const [mobile, setMobile] = useState('');
  const [templetmodel, setTempletModal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [Customerid, setCustomerId] = useState('');
  const onNextStep = () => {
    setCurrentPosition(prev => (prev < labels.length - 1 ? prev + 1 : prev));
  };
  console.log('fklg', currentPosition);
  const onPrevStep = () => {
    setCurrentPosition(prev => (prev > 0 ? prev - 1 : prev));
  };

 
  
const submit=()=>{

  Alert.alert(
    'Submit Data',
    `Customer ID: ${Customerid}\n parcel Weight: ${weight}\nParcel Type: ${parceltype}\nDelivery PersonId: ${deliveryperson}\n Customer Address:${address}`,
    [{ text: 'OK' }]
  );

  navigation.navigate('Home');
}


  const renderStepIndicator = ({position, stepStatus}) => {
   
    const iconConfig = {
      name:
        stepStatus === 'finished'
          ? 'check'
          : stepStatus === 'current'
          ? 'circle'
          : '',
      color: stepStatus === 'finished' ? '#ffffff' : '#4b81e6',
      size: stepStatus === 'finished' ? 20 : 12,
    };

    return <Icon {...iconConfig} />;
  };

  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#dae4f5']}
      style={{flex: 1}}>
      {/* <Header
        source={require('../../../Assests/L.png')}
        title={'Parcel Creation'}
        onPress={() => onPrevStep()}
      /> */}
      <View style={{height: 50, width: '100%', backgroundColor: '#151a4b'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
          <TouchableOpacity
            // disabled={currentPosition === 0}
            style={{
              paddingVertical: 8,
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 5,
            }}
            delayPressIn={0}
            onPress={() => {
              currentPosition === 0 ? navigation.goBack() : onPrevStep();
            }}>
            <Image
              style={{height: 18, width: 12}}
              source={require('../../../Assests/L.png')}
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
            {'Parcel Creation'}
          </Text>
        </View>
      </View>

      <ScrollView style={styles.scroll}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={labels.length}
          renderStepIndicator={renderStepIndicator}
        />
        <View style={styles.content}>
          {currentPosition + 1 == 1 ? (
            <Addrees
              customerId={Customerid}
              setCustomerId={setCustomerId}
              address={address} 
              setAddress={setAddress}
              NextState={onNextStep}
            />
          ) : currentPosition + 1 == 2 ? (
            <Package
             parceltype={parceltype}
              setParceltype={setParceltype}
              weight={weight}
              setWeight={setWeight}
            />
          ) : currentPosition + 1 == 3 ? (
            <Assign deliveryperson={deliveryperson} setDeliveryperson={setDeliveryperson}    />
          ) : (
            <Summary />
          )}

          {/* {currentPosition + 1 == 1 ? null : ( */}
          <View style={styles.buttonContainer}>
            <LinearGradient
              colors={['#151a4b', '#4b81e6', '#151a4b']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.7}}
              style={styles.button1}>
              <TouchableOpacity
                onPress={() => {
                  currentPosition === labels.length - 1
                    ? Alert.alert(
                        'Confirmation',
                        'Parcel Creation Successfull.!!!',
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => {
                             submit()
                            },
                          },
                        ],
                      )
                    : onNextStep();
                }}
                // disabled={currentPosition === labels.length - 1}
                style={styles.button}>
                <Text style={styles.buttonText}>
                  {currentPosition === labels.length - 1 ? 'Submit' : 'Next'}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          {/* )} */}
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </LinearGradient>
  );
};
export default ParcelCreate;
const Data = [
  {label: 'Select customer', value: 'Selet customer '},
  {label: 'Ramesh', value: 'Diamond'},
  {label: 'shyam', value: 'Gold'},
  {label: 'Ram', value: 'Platinum'},
  {label: 'Sohan', value: 'Silver'},
];
const Data1 = [
  {label: 'Select pracel type', value: 'Select Metal'},
  {label: 'Bill', value: 'Diamond'},
  {label: 'Non Bill', value: 'Gold'},
];