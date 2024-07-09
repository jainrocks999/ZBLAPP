
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
    paddingVertical: 10,marginBottom:0
  },
  content: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContent: {
    fontSize: 18,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
