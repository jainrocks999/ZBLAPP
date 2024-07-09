import axios from 'axios';

import Constants from '../Constants';
import Toast from 'react-native-simple-toast';
export default class Api {
  static fetchDataByPOST = async (url, data) => {
    console.log('Login detail', Constants.mainUrl + url);
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        url: Constants.mainUrl + url,
        data: data,
      });

      
    return response.data;
    } catch (error) {
      console.log('why eorror fatch by login', error);
      throw error;
    }
  };

  static fetchDataByGET = async (url, data) => {
    try {
      // console.log('virendra',data,Constants.MainUrl + url);
      const response = await axios({
        method: 'GET',
        headers: {
          MobileAppKey: 'EED26D5A-711D-49BD-8999-38D8A60329C5',
          // Authorization: 'Bearer ' + loginToken,
        },
        url: Constants.MainUrl + url,
        params: data,
      });
      // console.log('data downloadby data',response.data);
      return response.data;
    } catch (error) {
      //    Toast.show('Server not responding')
      console.log('error123', error);
      throw error;
    }
  };
  static fetchDataByGET1 = async (url, Token, data) => {
    console.log(
      'virendra mishra......token',
      Constants.MainUrl + url,
      data,
      Token,
    );
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Olocker: `Bearer ${Token}`,
        },
        url: Constants.MainUrl + url,
        params: data,
      });
      return response.data;
    } catch (error) {
      //   Toast.show('Server not responding')
      console.log('error123', error);
      throw error;
    }
  };

  static fetchDataByGET3 = async (url, Token, data) => {
    console.log(
      'virendra mishra......token',
      Constants.MainUrl + url,
      data,
      Token,
    );
    try {
      const response = await axios({
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Olocker: `Bearer ${Token}`,
        },
        url: Constants.MainUrl + url,
        data: data,
      });
      return response.data;
    } catch (error) {
      //   Toast.show('Server not responding')
      console.log('error123', error);
      throw error;
    }
  };

  static fetchDataByGET2 = async (url, Token) => {
    console.log('bbbb', url);
    console.log('aaaaa', Constants.MainUrl + url);
    try {
      const response = await axios({
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Olocker: `Bearer ${Token}`,
        },
        url: Constants.MainUrl + url,
      });
      return response.data;
    } catch (error) {
      // Toast.show('Server not responding')
      // console.log('vvvvv',error);
      throw error;
    }
  };
}
// class Api {
//   apiPost = async () => {};
//   getRequest = async (endpoint, token) => {
//     const url = Constants.mainUrl;
//     let config = {
//       method: 'get',
//       maxBodyLength: Infinity,
//       url: `${url}/${endpoint}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     return await axios
//       .request(config)
//       .then(response => {
//         return response;
//       })
//       .catch(error => {
//         throw new Error(error.message);
//       });
//   };
// }
//  export default new Api();
