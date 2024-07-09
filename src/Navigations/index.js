// import React from 'react';
// import {Image, View} from 'react-native';
// import {NavigationContainer, StackActions} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SpleashScreen from '../Screens/Auth/SplashScreen';
// import LoginPage from '../Screens/Auth/LoginPage';
// import Shippingparcel from '../Screens/Auth/ShipingparcelScreen';
// import ForgatePasswordScreen from '../Screens/Auth/ForgatePasswordScreen';
// import HomeScreen from '../Screens/Main/HomeScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Drawer from '../Component/DrawerContent';
// import ParcelCreate from '../Screens/Main/ParcelCreationRequest';
// import CustomerList from '../Screens/Main/CustomerList';
// import DeliverypersonList from '../Screens/Main/DeliveryPerson';
// import ParcelHistory from '../Screens/Main/parcelHistory';
// import ParcelDetail from '../Screens/Main/ParcelDetail';
// import AboutUs from '../Screens/Main/AboutsPage';
// import ContactUs from '../Screens/Main/ContactusPage';


// const Stack = createNativeStackNavigator();
// function Navigate() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Splash"
//         screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Splash" component={SpleashScreen} />
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="ForgotPassword" component={ForgatePasswordScreen} />
//         <Stack.Screen name="Shipping" component={Shippingparcel} />
//         <Stack.Screen name="Home" component={MyDrawer} />
//         <Stack.Screen name="ParcelCreate" component={ParcelCreate} />
//         <Stack.Screen name="customerList" component={CustomerList} />
//         <Stack.Screen name="Delivery" component={DeliverypersonList} />
//         <Stack.Screen name="Parcel" component={ParcelHistory} />
//         <Stack.Screen name="ParcelDetail" component={ParcelDetail} />
//         <Stack.Screen name="AboutUs" component={AboutUs} />
//         <Stack.Screen name="contactus" component={ContactUs} />
      



//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const DrawerStack = createDrawerNavigator();
// function MyDrawer() {
//   return (
//     <DrawerStack.Navigator initialRouteName='Home1'
//     screenOptions={{headerShown:false}}
//     drawerContent={() => <Drawer/>}>
//         <DrawerStack.Screen name="Home1" component={HomeScreen} />
//     </DrawerStack.Navigator>
//   );
// }
// export default Navigate;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from '../Screens/Auth/SplashScreen';
import LoginPage from '../Screens/Auth/LoginPage';
import Shippingparcel from '../Screens/Auth/ShipingparcelScreen';
import ForgatePasswordScreen from '../Screens/Auth/ForgatePasswordScreen';
import HomeScreen from '../Screens/Main/HomeScreen';
import Drawer from '../Component/DrawerContent';
import ParcelCreate from '../Screens/Main/ParcelCreationRequest';
import CustomerList from '../Screens/Main/CustomerList';
import DeliverypersonList from '../Screens/Main/DeliveryPerson';
import ParcelHistory from '../Screens/Main/parcelHistory';
import ParcelDetail from '../Screens/Main/ParcelDetail';
import AboutUs from '../Screens/Main/AboutsPage';
import ContactUs from '../Screens/Main/ContactusPage';
import TermsAndConditionsScreen from '../Screens/Main/Terms&ConditionsPage';
import PrivacyPolicyScreen from '../Screens/Main/Privacy&PolicyPage';

const Stack = createNativeStackNavigator();
function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="ForgotPassword" component={ForgatePasswordScreen} />
        <Stack.Screen name="Shipping" component={Shippingparcel} />
        <Stack.Screen name="Home" component={MyDrawer} />
        <Stack.Screen name="ParcelCreate" component={ParcelCreate} />
        <Stack.Screen name="customerList" component={CustomerList} />
        <Stack.Screen name="Delivery" component={DeliverypersonList} />
        <Stack.Screen name="Parcel" component={ParcelHistory} />
        <Stack.Screen name="ParcelDetail" component={ParcelDetail} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="contactus" component={ContactUs} />
        <Stack.Screen name="Terms&condition" component={TermsAndConditionsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DrawerStack = createDrawerNavigator();
function MyDrawer() {
  return (
    <DrawerStack.Navigator initialRouteName='Home1'
      screenOptions={{ headerShown: false }}
      drawerContent={() => <Drawer />}>
      <DrawerStack.Screen name="Home1" component={HomeScreen} />
    </DrawerStack.Navigator>
  );
}

export default Navigate;