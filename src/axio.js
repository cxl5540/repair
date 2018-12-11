
import axios from 'axios'
import { Indicator } from 'mint-ui';
// http request 拦截器
axios.interceptors.request.use((config) => {
     Indicator.open({   //打开loading
          spinnerType: 'fading-circle'
      });
      return config;
  }, (err) => {
          return Promise.reject(err)

  });
  //响应拦截器
  axios.interceptors.response.use((response) => {
    setTimeout(function(){
      Indicator.close();//关闭loading

    },1000);
      return response;     
         
  }, (err) => {
          return Promise.reject(err);

  });
export default axios