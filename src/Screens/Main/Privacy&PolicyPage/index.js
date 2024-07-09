import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../Component/CustomHeader';
import styles from './styles';
const PrivacyPolicyScreen = ({ navigation }) => {
  const handleAccept = () => {
    Alert.alert("Thank you", "You have accepted the privacy policy");
  };

  return (

    <LinearGradient colors={['#dae4f5', '#dae4f5','#4b81e6' ]}  style={{ flex: 1 }} >
    <Header
      source={require('../../../Assests/L.png')}
      title={'Privacy Policy'}
      onPress={() => navigation.goBack()}
    />

    <ScrollView contentContainerStyle={styles.container}>
      {/* <Animatable.View animation="fadeInDown" style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </Animatable.View> */}

      <Animatable.View animation="fadeInUp" style={styles.content}>
        <Text style={styles.sectionTitle}>Introduction</Text>
        <Text style={styles.text}>
          Welcome to Logistics Parcel. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices.
        </Text>

        <Text style={styles.sectionTitle}>Information Collection</Text>
        <Text style={styles.text}>
          We collect personal information that you provide to us directly, such as when you register for our services, make a purchase, or contact us for support.
        </Text>

        <Text style={styles.sectionTitle}>Use of Information</Text>
        <Text style={styles.text}>
          We use your information to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.
        </Text>

        <Text style={styles.sectionTitle}>Sharing of Information</Text>
        <Text style={styles.text}>
          We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.
        </Text>

        <Text style={styles.sectionTitle}>Security</Text>
        <Text style={styles.text}>
          We implement security measures to protect your information from unauthorized access, disclosure, or destruction.
        </Text>

        <Text style={styles.sectionTitle}>Changes to This Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our site.
        </Text>
      </Animatable.View>

      <View style={styles.buttonContainer}>

<LinearGradient colors={['#151a4b', '#4b81e6','#151a4b' ]} 
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.7 }}
        style={styles.button1}>
        <TouchableOpacity
      onPress={() =>{Alert.alert("Thank you", "You have accepted the privacy policy", [
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
      <Text style={styles.buttonText}>{'I Accept'}</Text>
    </TouchableOpacity>
        </LinearGradient>
</View>
    </ScrollView>
    </LinearGradient>
  );
};


export default PrivacyPolicyScreen;