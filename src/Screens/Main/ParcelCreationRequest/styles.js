
import {StyleSheet} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scroll: {
    flex: 1,
     paddingHorizontal: 15,
     marginTop:hp(4)
    // paddingVertical: 10,marginBottom:0
  },
  page: {
    height: hp(18),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgView: {
    height: '100%', 
    width: '100%'
  },
  img: {
    height: '100%', 
    width: '100%'
  },
  input: {
    width: '100%',
    marginLeft: 0,
    color: '#474747',
    //  backgroundColor:'grey',
    //  borderRadius:10
  },
  

  Text1: {
    fontWeight: '500',
    color: '#151a4b',
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Acephimere',
  },
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {height: 0, width: 0},
    elevation: 2,
    borderRadius: 10,
    backgroundColor:'#fff',
    // backgroundColor: '#e0a42a',
    marginBottom: 0,
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  main: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 0,
  },
  main1: {
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderColor: 'grey',
  },

  // button1: {
  //   elevation: 8,
  //   shadowColor: 'black',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   height: hp(6.5),
  //   width: wp(50),
  //   borderRadius: 30,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   marginTop: hp(2),
  // },
  // button: {
  //   backgroundColor: '#151a4b',
  //   height: hp(6.5),
  //   borderRadius: 30,
  //   width:'99%',
  //   // alignItems: 'center',
  //   paddingHorizontal: 0,
  //   // justifyContent: 'center',
  //   elevation: 2,
  //   shadowColor: '#000',
  //   shadowOffset: {width: 0, height: 2},
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },

   
  button1: {

    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: hp(6.5),
    width: wp(47),
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
     marginTop: hp(2),
  },
  button: {
    // backgroundColor: '#151a4b',
    height:hp(6.3),
    borderRadius: 30,
    width:'99%',
    alignItems: 'center',
    alignSelf:'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color:'#fff'
    // fontFamily: 'Montserrat-SemiBold', 
  },
  Forgate: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },

  // button: {
  //   backgroundColor: '#151a4b',
  //   paddingVertical: 8,
  //   borderRadius: 40,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingHorizontal: 30,
  //   // iOS shadow
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 10 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 10,
  //   // Android shadow (elevation)
  //   elevation: 10,
  // },
  textbt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Acephimere',
  },
  bottom2: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    // Android shadow (elevation)
    elevation: 10,
  },
});
