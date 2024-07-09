import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Header from '../../../Component/CustomHeader';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercent as hp,widthPrecent as wp } from '../../../Component/Responsive';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
const TermsAndConditionsScreen = ({ navigation }) => {
  const handleAgree = () => {
    Alert.alert("Thank you", "You have agreed to the terms and conditions");
  };

  return (
    <LinearGradient colors={['#dae4f5', '#dae4f5','#4b81e6' ]}  style={{ flex: 1 }} >
      <Header
        source={require('../../../Assests/L.png')}
        title={'Terms & Conditions'}
        onPress={() => navigation.goBack()}
      />
    <ScrollView contentContainerStyle={styles.container}>
   <Animatable.View animation="fadeInUp" style={styles.content}>
        <Animatable.Text animation="zoomInUp" iterationCount={1} direction="alternate" style={styles.sectionTitle}>Introduction</Animatable.Text>
        {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}

        <Text style={styles.text}>
          Welcome to Logistics Parcel. These terms and conditions outline the rules and regulations for the use of our app.
        </Text>
        <Animatable.Text  style={styles.sectionTitle} animation="zoomInUp">User Responsibilities</Animatable.Text>
        {/* <Text style={styles.sectionTitle}>User Responsibilities</Text> */}
        <Text style={styles.text}>
          Users are responsible for providing accurate information and complying with our policies. Failure to comply may result in account suspension.
        </Text>

        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <Text style={styles.text}>
          We value your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
        </Text>

        <Text style={styles.sectionTitle}>Changes to Terms</Text>
        <Text style={styles.text}>
        1.  We reserve the right to update these terms at any time. Users will be notified of significant changes.
        </Text>
        <Text style={styles.text}>
         2. We reserve the right to update these terms at any time. Users will be notified of significant changes.
        </Text>
        <Text style={styles.text}>
        3.  We reserve the right to update. these terms at any time. Users will be notified of significant changes.
        </Text>

        </Animatable.View>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>

      <View style={styles.buttonContainer}>

<LinearGradient colors={['#151a4b', '#4b81e6','#151a4b' ]} 
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.7 }}
        style={styles.button1}>
        <TouchableOpacity
      onPress={() =>{Alert.alert("Thank you", "You have agreed to the terms and conditions", [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        {text: 'OK', onPress: () =>{
           navigation.navigate('Home')
        }},
        ])}}
      // disabled={currentPosition === labels.length - 1}
      style={styles.button}>
      <Text style={styles.buttonText}>{'I Agree'}</Text>
    </TouchableOpacity>
        </LinearGradient>
</View>
    </ScrollView>
    </LinearGradient>
  );
};



export default TermsAndConditionsScreen;