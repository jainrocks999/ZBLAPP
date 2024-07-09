
import {StyleSheet,Dimensions} from 'react-native';
import {
  heightPercent as hp,
  widthPrecent as wp,
} from '../../../Component/Responsive';
export default StyleSheet.create({
  container1: {
    flexGrow:1,
    backgroundColor: '#fff',
  },

  scroll: {
    // flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingBottom:hp(10)
  },
  page: {
    height: hp(35),
    width: wp(100),
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
    backgroundColor: 'white',
    marginBottom: 0,
    paddingHorizontal: 10,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#151a4b',
  },
  description: {
    fontSize: 16,
    // textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#151a4b',
  },
  sectionContent: {
    fontSize: 16,
    color: '#555555',
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    // backgroundColor: '#f5f5f5',
    paddingBottom:hp(5)
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerBackground: {
    width: Dimensions.get('window').width,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  },
 
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#151a4b',
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  featureItem: {
    alignItems: 'center',
    width: '30%',
  },
  featureIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    textAlign: 'center',
  },
  team: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  teamMember: {
    alignItems: 'center',
    width: '30%',
  },
  teamImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 5,
  },
  teamName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  teamRole: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 5,
  },

});
