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

import StepIndicator from 'react-native-step-indicator';

import Icon from 'react-native-vector-icons/MaterialIcons';

const labels = [' Booked', ' Accepted', ' Delivered'];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#4b81e6',
  stepStrokeWidth: 3,
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
const Tracking = ({route}) => {
  const navigation = useNavigation();
  const [customerId, setCustomerId] = useState('');
  const [address, setAddress] = useState('');
  const [parceltype, setParceltype] = useState('');
  const [weight, setWeight] = useState('');
  const [deliveryperson, setDeliveryperson] = useState('');
  const [mobile, setMobile] = useState('');
  const [templetmodel, setTempletModal] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(2);

  const onNextStep = () => {
    setCurrentPosition(prev => (prev < labels.length - 1 ? prev + 1 : prev));
  };
  
  const onPrevStep = () => {
    setCurrentPosition(prev => (prev > 0 ? prev - 1 : prev));
  };

  const formatDate = (date) => {
    const d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1; // Months are zero-based
    let year = d.getFullYear().toString().slice(); // Get last 2 digits of year

    // Add leading zero to day and month if they are less than 10
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return `${day}/${month}/${year}`;
  };

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
  const renderLabel = (data) => {
    console.log('hfsfhsf', currentPosition,data);
    return (
      <View style={{marginLeft:0,flexDirection:'column',justifyContent:'space-between'}}>
        <Text>{data.label}</Text>
        { data.stepStatus === 'current'? <Text style={{fontSize:11,marginLeft:5.5
            
        }}>{new Date().toDateString()}</Text>:null}
       {data.stepStatus === 'finished' ? <Text style={{fontSize:11,marginLeft:5.5
            
        }}>{new Date('2024-07-01').toDateString()}</Text>:null}
      </View>
    );
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <StepIndicator
        customStyles={customStyles}
        renderLabel={renderLabel}
        currentPosition={currentPosition}
        labels={labels}
        direction="vertical"
        stepCount={labels.length}
        renderStepIndicator={renderStepIndicator}
      />
      <View style={styles.content}>
        {/* <Text>
          {'TRacking :'}
          <Text>{currentPosition + 1}</Text>{' '}
        </Text> */}
        {/* {currentPosition + 1 == 1 ? null : (
            <View style={styles.buttonContainer}>
              <View style={styles.button1}>
                <TouchableOpacity
                  onPress={() => onNextStep()}
                  // disabled={currentPosition === labels.length - 1}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </View>
          )} */}
      </View>

      {/* <View style={{height: 100}} /> */}
      {/* </ScrollView> */}
    </View>
  );
};
export default Tracking;
