import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {backgroundColor: '#dae4f5', flex: 1},
  view: {
    paddingLeft: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  about: {fontSize: 16, color: '#000000', fontFamily: 'Montserrat-Medium'},
  same: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-Medium',
    marginTop: 0,
    marginLeft: 20,
  },
  same1: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Medium',
    marginTop:5,
    // marginLeft: 20,
  },

  bottom: {
    bottom: 15,
    left: 0,
    right: 0,
    position: 'absolute',
    paddingLeft: 20,
  },
  view1: {paddingLeft: 15, marginTop: 10},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toucha: {alignItems: 'center', justifyContent: 'center',},
  icon: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20
  },
  contact: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    marginTop: 20,
  },
  touch: {
    marginRight: 5,
    marginTop: 5,
  },
});
