import {StyleSheet} from 'react-native';
import { heightPercent as hp,widthPrecent as wp } from '../Responsive';
export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#032e63',
    //alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 20,
  },
  container1: {
    flex: 1,
    // backgroundColor: '#f0eeee',
  },

  crossbtn: {
    height: hp(5),
    width: hp(5),
    backgroundColor: '#151a4b',
    borderRadius: wp(4.5),
    position: 'absolute',
    right: wp(2),
    top: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  xbtn: {
    color: 'white',
    fontSize: wp(4.5),
    fontWeight: '500',
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  modalView: {
    height: hp(92),
    width: wp(93),
    backgroundColor: '#dae4f5',
    alignSelf: 'center',
    elevation: 5,
    marginTop: wp(0),
    borderRadius: wp(2),
    paddingHorizontal: wp(2),
  },
  modalText: {
    marginTop: hp(0),
  },
  input: {
    width: '90%',
    marginLeft: 0,
    color: '#474747',
  },
  bottom1: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: -10,
    width: '90%',
  },
  bottom1t: {
    fontSize: 12,
    color: '#757575',
    fontFamily: 'Acephimere',
    textAlign: 'center',
  },
  bottom2: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {height: 93, width: 90},
  Text1: {
    fontWeight: '500',
    color: '#151a4b',
    marginTop: 15,
    fontSize: 16,
    fontFamily: 'Acephimere',
  },
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {height: 2, width: 0},
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 0,
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  card1: {
    // shadowColor: 'black',
    // shadowOpacity: 0.25,
    // shadowRadius: 8,
    // shadowOffset: {height: 2, width: 0},
    // elevation: 5,
    borderRadius: 6,
    backgroundColor: '#E5E5E5E6',
    marginBottom: 0,
    paddingHorizontal: 35,
    paddingVertical: 25,
    marginHorizontal: 11,
    marginBottom: 20,
  },
  img: {
    height: 25,
    width: 25,
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 17,
    fontWeight: '600',
  },
  main: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 0,
  },
  main1: {
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderColor: 'grey',
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  bottomV: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  textB: {
    fontSize: 23,
    color: 'grey',
    fontWeight: '500',
    marginTop: 15,
  },
  textC: {
    fontSize: 13,
    color: 'grey',
    fontWeight: '500',
    marginTop: 3,
  },


 
  button1: {
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: hp(6.5),
    width: wp(45),
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  button: {
    // backgroundColor: '#fff',
    height: hp(6),
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    // fontFamily: 'Montserrat-SemiBold', 
  },
  buttomv:{
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: hp(6.5),
    width: wp(30),
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: hp(2),
    marginBottom:hp(3)
  }
});
