import { Fragment } from "react";
import {View,Text, Image,SafeAreaView,LogBox } from "react-native";
import RootApp from '../ZBL/src/Navigations/index'
import { Provider } from "react-redux";
import store from "./src/Redux/Store";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const App=()=>{
  return (
    <Fragment>
      {/* <SafeAreaView style={{backgroundColor:Platform.OS=='ios'?'#032e63':'#fff'}}/> */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Platform.OS == 'ios' ? '#052a47' : '#fff',
        }}>
      <Provider store={store}>
          <RootApp />
          </Provider>
      </SafeAreaView>
    </Fragment>
  );
}
export default App;
