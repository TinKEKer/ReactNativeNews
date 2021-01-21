import {Axios} from './axios';
import axios from 'axios';
export const api = {

  getBitcoinNews:(callback,errorCallBack)=>{
    Axios.get(
      'everything?q=bitcoin&sortBy=publishedAt&apiKey=b3f746e0754c420a9c4f491ee4045411',
    )
      .then(({data}) => callback(data))
      .catch((e) => {
        errorCallBack(true);
      });
  },
  getTechCrunchNews:()=>{
    Axios.get(
      'top-headlines?sources=techcrunch&apiKey=b3f746e0754c420a9c4f491ee4045411',
    ).then(({data}) => console.log(data));
  },
  sendPhotoToServer:(base64Photo,isUploading,isUploaded)=>axios.post('https://flutter-test.redentu.com',base64Photo,{headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(
        ({data}) =>
          data.message === 'Success' && (isUploading(false), isUploaded(true)),
      )
      .catch((e) => console.log('error', e)),
};
