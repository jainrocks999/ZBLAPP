import {} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Header from '../../../Component/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
const ForgatePasswordScreen = ({route}) => {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        source={require('../../../Assests/L.png')}
        title={'Forgate Password'}
        onPress={() => navigation.goBack()}
      />
      <ScrollView style={styles.scroll}>
        <View style={styles.page}>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../../../Assests/Zbl.jpg')}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.main}>
            <Text style={styles.Text1}>User Name</Text>
            <View style={styles.main1}>
              <TextInput
                style={styles.input}
                placeholder="Enter user name"
                placeholderTextColor="grey"
                // value={collection}
                // onChangeText={val => setCollection(val)}
              />
            </View>
          </View>
          
          {/* <TouchableOpacity
          onPress={()=>navigation.navigate('ForgotPassword')}
          style={styles.Forgate}>
            <Text style={[styles.Text1, {color: 'grey'}]}>
              Forgate Password?
            </Text>
          </TouchableOpacity> */}
          <View style={styles.button1}>
            <TouchableHighlight
              style={styles.button}
              underlayColor={'#e0a42a'}
              onPress={() =>
                navigation.navigate('Login')
              }>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableHighlight>
          </View>
          {/* <View style={styles.bottom2}>
          <TouchableOpacity
           
            style={styles.button}>
            <Text style={styles.textbt}>{'Login'}</Text>
          </TouchableOpacity>
        </View> */}
        </View>
      </ScrollView>
    </View>
  );
};
export default ForgatePasswordScreen;
