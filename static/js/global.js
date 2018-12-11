import axios from "axios"
const config = {
    requestUrl:'http://192.168.197.58:80/',
    wx_openid:'',
    userId:'',
}

  var  getOpenId=function(){
      var url='http://ph.cq-p.com.cn/HR_WX/index.html?openId=oiRNv5pTPQjIEELGNcS5xuHzxZiw&code=001rQE5L0mTU9628y94L0SIC5L0rQE5a';
        if (url.indexOf("?") != -1) {    
            var str = url.substr(1);         
             var strs = str.split("=");
             var  a = strs[1].split("&");
             var bb= a.pop();
             var wx_openid= a.join('');
          config.wx_openid=wx_openid;
          console.log( wx_openid);          
        }         
    };
  var  getUserId=function () {
          var params = new URLSearchParams();
          params.append('wx_openid',config.wx_openid);
            let _this = this
            this.$http.post("http://192.168.197.58:80/v1/user/addUser",params).then(function ( res ) {
           _this.userId=res.data.data.user_id
        });
      };

let bindToGlobal = (obj, key) => {
     if (typeof window[key] === 'undefined') {
         window[key] = {};
     }

     for (let i in obj) {
         window[key][i] = obj[i]
     }
}

var params = new URLSearchParams();
params.append('wx_openid', config.wx_openid);
axios.post(config.requestUrl+'v1/user/addUser',params).then(function ( res ) {
    config.userId=res.data.data.user_id;
       });



bindToGlobal(config,'_const')







