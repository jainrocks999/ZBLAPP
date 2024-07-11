import {} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
import FastImage from 'react-native-fast-image';
import Arrow from '../../../Assests/Icon/Arrow.svg';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Statusbar from '../../../Component/Statusbar';
const Shippingparcel = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#dae4f5']}
      style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            height: hp(30),
            width: wp(60),
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <FastImage
            style={{height: '100%', width: 'auto'}}
            source={require('../../../Assests/Group.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 32, color: '#151a4b', fontWeight: '700'}}>
            {'Ship anything \n    anywhere'}
          </Text>
          <Text style={{width: 'auto', textAlign: 'center', marginTop: hp(3)}}>
            {
              'Send packages, track shipments and get \n swift responses to all your queries and \n issues '
            }
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            marginTop: hp(15),
            marginBottom: hp(4),
          }}>
          <LinearGradient
            colors={['#151a4b', '#4b81e6', '#151a4b']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.7}}
            style={styles.button1}>
            <TouchableOpacity
              style={styles.button}
              // underlayColor={'#e0a42a'}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
      <Statusbar />
    </LinearGradient>
  );
};
export default Shippingparcel;
const styles = StyleSheet.create({
  button1: {
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: hp(6.5),
    width: wp(40),
    borderRadius: 20,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: hp(0),
  },
  button: {
    // backgroundColor: '#FCDA64',
    // height: hp(6),
    // borderRadius: 30,
    // alignItems: 'center',
    // paddingHorizontal: 10,
    // justifyContent: 'center',
    // elevation: 2,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Montserrat-Bold',
    // marginRight: 14
  },
});
