import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Eye from '../../../Assests//Icon/eye.svg';
import Eye1 from '../../../Assests//Icon/eye1.svg';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {widthPrecent} from '../../../Component/Responsive';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../../../Component/Loader';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoader = useSelector(state => state.isFetching);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isValid, setIsValid] = useState(true);
  // const handleValidateEmail = async () => {
  //   if (mobile == '') {
  //     Toast.show('Please enter the username');
  //   } else if (password == '') {
  //     Toast.show('Please enter the password');
  //   } else {
  //     dispatch({
  //       type: 'User_Login_Request',
  //       url: 'api/login',
  //       username: mobile,
  //       password: password,
  //       navigation,
  //     });
  //   }

  // };
  const handleValidateEmail = async () => {
    const validationMessages = [
      {condition: mobile === '', message: 'Please enter the username'},
      {condition: password === '', message: 'Please enter the password'},
    ];

    for (let {condition, message} of validationMessages) {
      if (condition) {
        Toast.show(message);
        return;
      }
    }
    dispatch({
      type: 'User_Login_Request',
      url: 'api/login',
      username: mobile,
      password: password,
      navigation,
    });
  };

  return (
    <LinearGradient
      colors={['#dae4f5', '#dae4f5', '#4b81e6']}
      style={{flex: 1}}>
      {isLoader ? <Loading /> : null}
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <KeyboardAwareScrollView
          extraScrollHeight={Platform.OS == 'android' ? -20 : 100}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          contentContainerStyle={{flexGrow: 1, borderWidth: 1}}>
          <View style={{}}>
            <View style={styles.main}>
              <Image
                style={[styles.logo, {resizeMode: 'contain'}]}
                source={require('../../../Assests/ZBL_logo.png')}
              />
            </View>
            <View style={[styles.container, {marginTop: 30, height: 350}]}>
              {/* <View style={styles.yellow}> */}

              <View style={{alignItems: 'center'}}>
                <View style={styles.black1}>
                  <View style={styles.black}>
                    <View style={{paddingHorizontal: 40, marginTop: 10}}>
                      <Text style={styles.login}>Login</Text>
                      <View style={styles.inputContainer}>
                        {/* <TextInput style={[styles.pass, !isValid && styles.errorInput]} */}
                        <TextInput
                          style={styles.pass}
                          placeholder="Enter Username "
                          placeholderTextColor={'#4b81e6'}
                          value={mobile}
                          onChangeText={val => {
                            setMobile(val);
                            setIsValid(true);
                          }}
                        />
                      </View>
                      {/* {!isValid && <Text style={styles.errorText}>Please enter a valid email address.</Text>} */}
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.pass}
                          placeholder="Enter Password"
                          placeholderTextColor={'#4b81e6'}
                          keyboardType="default"
                          value={password}
                          onChangeText={val => setPassword(val)}
                          secureTextEntry={visible}
                        />
                        {visible ? (
                          <TouchableOpacity
                            style={{padding: 6, marginLeft: widthPrecent(-6)}}
                            onPress={() => setVisible(!visible)}>
                            <Eye />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            style={{padding: 6, marginLeft: widthPrecent(-6)}}
                            onPress={() => setVisible(!visible)}>
                            <Eye1 />
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <View style={{marginTop: 50}}>
                      <LinearGradient
                        colors={['#151a4b', '#4b81e6', '#151a4b']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.7}}
                        style={styles.button1}>
                        <TouchableOpacity
                          onPress={
                            () => handleValidateEmail()
                            //  navigation.replace('Home')
                          }
                          style={styles.button}>
                          <Text style={styles.text}>Login</Text>
                          {/* <Arrow /> */}
                        </TouchableOpacity>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 20}} />
        </KeyboardAwareScrollView>
      </ScrollView>
    </LinearGradient>
  );
};
export default Login;

// import {} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   TouchableHighlight,
// } from 'react-native';
// import Header from '../../../Component/CustomHeader';
// import {useNavigation} from '@react-navigation/native';
// import styles from './styles';
// const LoginPage = ({route}) => {

//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Header
//         source={require('../../../Assests/L.png')}
//         title={'Login'}
//         onPress={() => navigation.goBack()}
//       />
//       <ScrollView style={styles.scroll}>
//         <View style={styles.page}>
//           <View style={styles.imgView}>
//             <Image
//               style={styles.img}
//               source={require('../../../Assests/Zbl.jpg')}
//             />
//           </View>
//         </View>
//         <View style={styles.card}>
//           <View style={styles.main}>
//             <Text style={styles.Text1}>User Name</Text>
//             <View style={styles.main1}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter user name"
//                 placeholderTextColor="grey"
//                 // value={collection}
//                 // onChangeText={val => setCollection(val)}
//               />
//             </View>
//           </View>
//           <View style={styles.main}>
//             <Text style={styles.Text1}>Password</Text>
//             <View style={styles.main1}>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter password"
//                 placeholderTextColor="grey"
//                 // value={collection}
//                 // onChangeText={val => setCollection(val)}
//               />
//             </View>
//           </View>
//           {/* <TouchableOpacity
//           onPress={()=>navigation.navigate('ForgotPassword')}
//           style={styles.Forgate}>
//             <Text style={[styles.Text1, {color: 'grey'}]}>
//               Forgate Password?
//             </Text>
//           </TouchableOpacity> */}
//           <View style={styles.button1}>
//             <TouchableHighlight
//               style={styles.button}
//               underlayColor={'#e0a42a'}
//               onPress={() =>
//                 navigation.navigate('Login')
//               }>
//               <Text style={styles.buttonText}>Login</Text>
//             </TouchableHighlight>
//           </View>
//           {/* <View style={styles.bottom2}>
//           <TouchableOpacity

//             style={styles.button}>
//             <Text style={styles.textbt}>{'Login'}</Text>
//           </TouchableOpacity>
//         </View> */}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };
// export default LoginPage;
