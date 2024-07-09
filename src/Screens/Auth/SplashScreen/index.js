import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {View,Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Statusbar from "../../../Component/Statusbar";
import storage from "../../../Component/StorageAsync";
const SpleashScreen=()=>{
    const navigation =useNavigation();
    useEffect(() => {
        initial();
      }, []);
    
      const initial = async () => {
        const Token = await storage.getItem(storage.TOKEN);
        console.log('token',Token);
        if(!Token){
        setTimeout(() => {
          navigation.replace('Shipping')
        }, 2000);
      } else {
        setTimeout(() => navigation.replace('Home'), 2000);
      }
       
      };
return(
  <LinearGradient colors={['#dae4f5', '#dae4f5','#dae4f5' ]} style={{ flex: 1 }}>
    <View style={{alignItems:'center',justifyContent:'center',}}>
    {/* <View style={{height:300,width:300}}> */}
    <Image style={{height:'100%',width:'100%'}}
    resizeMode="contain"
      source={require('../../../Assests/ZBL_logo1.png')}
    />
    {/* </View> */}
    {/* <Text>SpleashScreen</Text> */}
  </View>
  <Statusbar/>
  </LinearGradient>
)
}
export default SpleashScreen;


// import { useNavigation } from "@react-navigation/native";
// import { useEffect } from "react";
// import { View, Text, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Statusbar from "../../../Component/Statusbar";
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Ensure AsyncStorage is imported
// import storage from "../../../Component/StorageAsync";

// const SpleashScreen = () => {
//   const navigation = useNavigation();

//   useEffect(() => {
//     const initial = async () => {
//       try {
//         const Token = await storage.getItem(storage.TOKEN); // Use AsyncStorage correctly
//         console.log('token', Token);
//         if (!Token) {
//           setTimeout(() => {
//             navigation.replace('Shipping');
//           }, 2000);
//         } else {
//           setTimeout(() => {
//             navigation.replace('Home');
//           }, 2000);
//         }
//       } catch (error) {
//         console.error('Error fetching token', error);
//       }
//     };

//     initial();
//   }, [navigation]); // Adding navigation to the dependency array ensures useEffect is run when navigation changes

//   return (
//     <LinearGradient colors={['#dae4f5', '#dae4f5', '#dae4f5']} style={{ flex: 1 }}>
//       <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//         <Image
//           style={{ height: '100%', width: '100%' }}
//           resizeMode="contain"
//           source={require('../../../Assests/ZBL_logo1.png')}
//         />
//       </View>
//       <Statusbar />
//     </LinearGradient>
//   );
// };

// export default SpleashScreen;