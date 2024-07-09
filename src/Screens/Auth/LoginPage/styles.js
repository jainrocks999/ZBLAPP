import {Platform, StyleSheet} from 'react-native';
import { heightPercent as hp,widthPrecent as wp } from '../../../Component/Responsive';

export default StyleSheet.create({
  main:{ 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 32 
  },
  logo:{
    height:315,
    width:315
  },
  container:{ 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    marginTop: 0,
  },
  yellow:{ 
    height: 240, 
    width: '99%', 
    backgroundColor: '#FCDA64', 
    borderRadius: 40 
  },
yellow1:{
  height: 242, 
  width: '90%', 
  backgroundColor: '#fff', 
  borderRadius: 40 ,
  elevation: 8,
  alignItems:'center',
  shadowColor: 'black',
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

},

  view:{
    paddingHorizontal: 40,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  signup:{ 
    fontFamily: 'Montserrat-Bold', 
    fontSize: 18, 
    color: '#000' 
  },
  free:{ 
    fontFamily: 'Montserrat-Bold', 
    fontSize: 18, 
    color: '#fff' 
  },
  arrowContainer:{
    width: 42,
    height: 38,
    backgroundColor: '#000000',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  black:{
    // backgroundColor: '#fff',
    // width: '99.3%',
    // height: 230,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 80,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 80,
    
  },
  black1:{ backgroundColor: '#fff',
    width: '94%',
    paddingVertical:15,
   paddingHorizontal:10,
   borderRadius:10,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 80,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 80,
    elevation: 8,
    alignItems:'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,},
  already:{ 
    color: '#FCDA64', 
    fontSize: 10, 
    fontFamily: 'Montserrat-Regular' 
  },
  login:{ 
    fontFamily: 'Montserrat-Bold', 
    color: '#4b81e6', 
    fontSize: 18, 
    marginTop: 2 
  },
  country:{
    borderBottomWidth: 1,
    borderColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
    height: 30
  },
  ninety:{
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    marginTop:Platform.OS=='android'?0:5
  },
  input:{
    color: '#FFFFFF',
    height: 35,
    borderColor: '#fff',
    marginTop: 4,
    width: '90%',
    marginLeft: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular'
  },
  inputContainer:{
    borderBottomWidth: 1,
    borderColor: '#4b81e6',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
    height: 30
  },
  pass:{
    color: '#4b81e6',
    height: 35,
    borderColor: '#4b81e6',
    marginTop: 4,
    width: '100%',
    fontSize: 13,
    fontFamily: 'Montserrat-Regular'
  },
  forgot:{ 
    color: '#FCDA64', 
    fontSize: 10, 
    fontFamily: 'Montserrat-Regular' 
  },
  mpin:{ 
    color: '#FCDA64', 
    fontSize: 10, 
    fontFamily: 'Montserrat-Regular', 
    marginTop: 10 
  },
  button:{
    height:hp(6.5) ,
    width: wp(76),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#FCDA64',
    flexDirection: 'row',
  },
  button1:{ 
    //  height: hp(7),
    //  width:wp(80),
     borderRadius: 20,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    // flexDirection: 'row',
    elevation: 8,
    alignItems:'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,},
  text:{ 
    color: '#fff', 
    fontSize: 17, 
    fontFamily: 'Montserrat-Bold',
    marginRight: 14 
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});



// import {StyleSheet} from 'react-native';
// import {
//   heightPercent as hp,
//   widthPrecent as wp,
// } from '../../../Component/Responsive';
// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },

//   scroll: {
//     flex: 1,
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//   },
//   page: {
//     height: hp(35),
//     width: wp(100),
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//   },
//   imgView: {
//     height: '100%', 
//     width: '100%'
//   },
//   img: {
//     height: '100%', 
//     width: '100%'
//   },
//   input: {
//     width: '100%',
//     marginLeft: 0,
//     color: '#474747',
//     //  backgroundColor:'grey',
//     //  borderRadius:10
//   },

//   Text1: {
//     fontWeight: '500',
//     color: '#151a4b',
//     marginTop: 10,
//     fontSize: 16,
//     fontFamily: 'Acephimere',
//   },
//   card: {
//     shadowColor: 'black',
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     shadowOffset: {height: 0, width: 0},
//     elevation: 2,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     marginBottom: 0,
//     paddingHorizontal: 5,
//     paddingVertical: 10,
//     paddingBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },

//   main: {
//     // flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginTop: 0,
//   },
//   main1: {
//     borderWidth: 1,
//     borderRadius: 15,
//     height: 40,
//     width: '100%',
//     marginTop: 10,
//     paddingHorizontal: 15,
//     justifyContent: 'center',
//     borderColor: 'grey',
//   },

//   button1: {
//     elevation: 8,
//     shadowColor: 'black',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     height: hp(6.5),
//     width: wp(30),
//     borderRadius: 20,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: hp(2),
//   },
//   button: {
//     backgroundColor: '#151a4b',
//     height: hp(6),
//     borderRadius: 30,
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     justifyContent: 'center',
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 15,
//   },
//   Forgate: {
//     alignItems: 'flex-end',
//     paddingHorizontal: 10,
//   },

//   // button: {
//   //   backgroundColor: '#151a4b',
//   //   paddingVertical: 8,
//   //   borderRadius: 40,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   paddingHorizontal: 30,
//   //   // iOS shadow
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 10 },
//   //   shadowOpacity: 0.25,
//   //   shadowRadius: 10,
//   //   // Android shadow (elevation)
//   //   elevation: 10,
//   // },
//   // textbt: {
//   //   color: 'white',
//   //   fontSize: 16,
//   //   fontWeight: '500',
//   //   fontFamily: 'Acephimere',
//   // },
//   // bottom2: {
//   //   marginTop: 30,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   // iOS shadow
//   //   shadowColor: '#000',
//   //   shadowOffset: { width: 0, height: 10 },
//   //   shadowOpacity: 0.25,
//   //   shadowRadius: 10,
//   //   // Android shadow (elevation)
//   //   elevation: 10,
//   // },
// });
