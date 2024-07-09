
import {} from 'react';

import Header from '../../../Component/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const AboutUs = ({route}) => {
 
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#dae4f5', '#dae4f5','#4b81e6' ]}  style={{ flex: 1 }} >
      <Header
        source={require('../../../Assests/L.png')}
        title={'AboutUs'}
        onPress={() => navigation.goBack()}
      />
       <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
      <View style={styles.page}>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../../../Assests/Zbl.jpg')}
            />
          </View>
        </View>
        {/* <Animatable.Image 
          animation="bounceIn" 
          source={{uri: 'https://example.com/logo.png'}} 
          style={styles.logo} 
        /> */}
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.section}>
        <Text style={styles.title}>About Logistics Parcel</Text>
        <Text style={styles.description}>
          Logistics Parcel is committed to providing reliable and efficient parcel delivery services. 
          Our team ensures your packages are delivered on time, every time.
        </Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.section}>
        <Text style={styles.sectionTitle}>Our Features</Text>
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Icon name="time-outline" size={35} color="#4F8EF7" />
            <Text style={styles.featureText}>Fast Delivery</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon1 name="package-dependents" size={35} color="#4F8EF7" />
            <Text style={styles.featureText}>Secure Packaging</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon2 name="map-marker" size={35} color="#4F8EF7" />
            <Text style={styles.featureText}>Real-time Tracking</Text>
          </View>
        </View>
      </Animatable.View>

      {/* <Animatable.View animation="fadeInUp" style={styles.section}>
        <Text style={styles.sectionTitle}>Meet Our Team</Text>
        <View style={styles.team}>
          <View style={styles.teamMember}>
            <Image 
              source={{uri: 'https://example.com/team1.jpg'}} 
              style={styles.teamImage} 
            />
            <Text style={styles.teamName}>John Doe</Text>
            <Text style={styles.teamRole}>CEO</Text>
          </View>
          <View style={styles.teamMember}>
            <Image 
              source={{uri: 'https://example.com/team2.jpg'}} 
              style={styles.teamImage} 
            />
            <Text style={styles.teamName}>Jane Smith</Text>
            <Text style={styles.teamRole}>COO</Text>
          </View>
          <View style={styles.teamMember}>
            <Image 
              source={{uri: 'https://example.com/team3.jpg'}} 
              style={styles.teamImage} 
            />
            <Text style={styles.teamName}>Bob Johnson</Text>
            <Text style={styles.teamRole}>CTO</Text>
          </View>
        </View>
      </Animatable.View> */}

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        <Text style={styles.footerText}>Contact Us: contact@logisticsparcel.com</Text>
        <Text style={styles.footerText}>Phone: +1 234 567 890</Text>
      </Animatable.View>
    </ScrollView>
      {/* <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.page}>
          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../../../Assests/Zbl.jpg')}
            />
          </View>
        </View>
        <View style={styles.card}>
        <Text style={styles.title}>About Our App</Text>
      <Text style={styles.description}>
        Our app aims to provide the best service for our users. 
        We are constantly updating our app with new features to make your experience even better.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Version</Text>
        <Text style={styles.sectionContent}>1.0.0</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Developers</Text>
        <Text style={styles.sectionContent}>John Doe, Jane Smith, Bob Johnson</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.sectionContent}>contact@example.com</Text>
      </View>
        </View>
      </ScrollView> */}
    </LinearGradient>
  );
};
export default AboutUs;


// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/Ionicons';

// const AboutScreen = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Animatable.View animation="fadeInDown" style={styles.header}>
//         <Image 
//           source={{uri: 'https://example.com/header-bg.jpg'}} 
//           style={styles.headerBackground} 
//         />
//         <Animatable.Image 
//           animation="bounceIn" 
//           source={{uri: 'https://example.com/logo.png'}} 
//           style={styles.logo} 
//         />
//       </Animatable.View>

//       <Animatable.View animation="fadeInUp" style={styles.section}>
//         <Text style={styles.title}>About Logistics Parcel</Text>
//         <Text style={styles.description}>
//           Logistics Parcel is committed to providing reliable and efficient parcel delivery services. 
//           Our team ensures your packages are delivered on time, every time.
//         </Text>
//       </Animatable.View>

//       <Animatable.View animation="fadeInUp" style={styles.section}>
//         <Text style={styles.sectionTitle}>Our Features</Text>
//         <View style={styles.features}>
//           <View style={styles.featureItem}>
//             <Icon name="ios-time" size={50} color="#4F8EF7" />
//             <Text style={styles.featureText}>Fast Delivery</Text>
//           </View>
//           <View style={styles.featureItem}>
//             <Icon name="ios-lock-closed" size={50} color="#4F8EF7" />
//             <Text style={styles.featureText}>Secure Packaging</Text>
//           </View>
//           <View style={styles.featureItem}>
//             <Icon name="ios-map" size={50} color="#4F8EF7" />
//             <Text style={styles.featureText}>Real-time Tracking</Text>
//           </View>
//         </View>
//       </Animatable.View>

//       <Animatable.View animation="fadeInUp" style={styles.section}>
//         <Text style={styles.sectionTitle}>Meet Our Team</Text>
//         <View style={styles.team}>
//           <View style={styles.teamMember}>
//             <Image 
//               source={{uri: 'https://example.com/team1.jpg'}} 
//               style={styles.teamImage} 
//             />
//             <Text style={styles.teamName}>John Doe</Text>
//             <Text style={styles.teamRole}>CEO</Text>
//           </View>
//           <View style={styles.teamMember}>
//             <Image 
//               source={{uri: 'https://example.com/team2.jpg'}} 
//               style={styles.teamImage} 
//             />
//             <Text style={styles.teamName}>Jane Smith</Text>
//             <Text style={styles.teamRole}>COO</Text>
//           </View>
//           <View style={styles.teamMember}>
//             <Image 
//               source={{uri: 'https://example.com/team3.jpg'}} 
//               style={styles.teamImage} 
//             />
//             <Text style={styles.teamName}>Bob Johnson</Text>
//             <Text style={styles.teamRole}>CTO</Text>
//           </View>
//         </View>
//       </Animatable.View>

//       <Animatable.View animation="fadeInUp" style={styles.footer}>
//         <Text style={styles.footerText}>Contact Us: contact@logisticsparcel.com</Text>
//         <Text style={styles.footerText}>Phone: +1 234 567 890</Text>
//       </Animatable.View>
//     </ScrollView>
//   );
// };


