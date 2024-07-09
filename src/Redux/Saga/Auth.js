import {ToastAndroid, YellowBox} from 'react-native';
import {takeEvery, put, call} from 'redux-saga/effects';
import Api from '../Api';
 import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../../Component/StorageAsync';
function* Login (action){
 
try {
  console.log('hdfghdig',action);
  const data = new FormData();
data.append('username', action.username);
data.append('password', action.password);

const response = yield call(Api.fetchDataByPOST,action.url,data)
console.log('response ,,,',response);
if(response.status==true){
  yield put({
    type: 'User_Login_Success',
    payload: response,
  });
  yield storage.setItem(storage.TOKEN,response.token);
  action.navigation.replace('Home');

}else{
  yield put({
    type: 'User_Login_Error',
    payload: response,
  });
  Toast.show(response.error)
}

} catch (error) {
  yield put({
    type: 'User_Login_Error',
    
  });
  Toast.show('Network Error')
}
}
export default function* authSaga() {
yield takeEvery('User_Login_Request',Login)

}
