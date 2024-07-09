import React from 'react';
import { View, Alert, ScrollView, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Header from '../../../Component/CustomHeader';
import AnimatedText from './Animated'; // Import AnimatedText component
import styles from './styles';

const TermsAndConditionsScreen = ({ navigation }) => {
  const handleAgree = () => {
    Alert.alert("Thank you", "You have agreed to the terms and conditions");
  };

  const title = "Contact Us";
  const introduction = "Introduction";
  const userResponsibilities = "User Responsibilities";
  const privacyPolicy = "Privacy Policy";
  const changesToTerms = "Changes to Terms";

  const bodyText1 = "Welcome to Logistics Parcel. These terms and conditions outline the rules and regulations for the use of our app.";
  const bodyText2 = "Users are responsible for providing accurate information and complying with our policies. Failure to comply may result in account suspension.";
  const bodyText3 = "We value your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your information.";
  const bodyText4 = "1. We reserve the right to update these terms at any time. Users will be notified of significant changes.";
  const bodyText5 = "2. We reserve the right to update these terms at any time. Users will be notified of significant changes.";
  const bodyText6 = "3. We reserve the right to update these terms at any time. Users will be notified of significant changes.";

  let baseDelay = 100;

  return (
    <LinearGradient colors={['#dae4f5', '#dae4f5', '#4b81e6']} style={{ flex: 1 }}>
      <Header
        source={require('../../../Assests/L.png')}
        title={title}
        onPress={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View animation="fadeInUp" style={styles.content}>
          <AnimatedText text={introduction} style={styles.sectionTitle} baseDelay={baseDelay} />
         {/* <Text>{ baseDelay += introduction.length * 50}</Text> */}
          <AnimatedText text={bodyText1} style={styles.text} baseDelay={baseDelay} />
          {/* <Text>{ baseDelay +=  bodyText1.length * 50}</Text> */}
         
          <AnimatedText text={userResponsibilities} style={styles.sectionTitle} baseDelay={baseDelay} />

          <AnimatedText text={bodyText2} style={styles.text} baseDelay={baseDelay} />
         
          <AnimatedText text={privacyPolicy} style={styles.sectionTitle} baseDelay={baseDelay} />
        
          <AnimatedText text={bodyText3} style={styles.text} baseDelay={baseDelay} />
       
          <AnimatedText text={changesToTerms} style={styles.sectionTitle} baseDelay={baseDelay} />
      
          <AnimatedText text={bodyText4} style={styles.text} baseDelay={baseDelay} />
       
          <AnimatedText text={bodyText5} style={styles.text} baseDelay={baseDelay} />
   
          <AnimatedText text={bodyText6} style={styles.text} baseDelay={baseDelay} />
        </Animatable.View>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={{ textAlign: 'center' }}>❤️</Animatable.Text>
        <View style={styles.buttonContainer}>
          <LinearGradient
            colors={['#151a4b', '#4b81e6', '#151a4b']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.7 }}
            style={styles.button1}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Thank you", "You have agreed to the terms and conditions", [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'OK', onPress: () => {
                      navigation.navigate('Home')
                    }
                  },
                ])
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{'I Agree'}</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TermsAndConditionsScreen;
