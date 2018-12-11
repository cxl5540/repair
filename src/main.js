import Vue from 'vue'  
import 'vue-ydui/dist/ydui.base.css'
import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.flexible.js'
import 'vue-ydui/dist/ydui.rem.js'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import  '../static/js/global.js'
import axio from './axio'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
  Vue.use(Mint);

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI
import filters from "./filters"

Vue.prototype.formatDate = function (inputTime){
  var date = new Date(inputTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d ;
}

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.prototype.$http = axios

//按钮
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
//图标
import {Icons} from 'vue-ydui/dist/lib.rem/icons';
Vue.component(Icons.name, Icons);
//头部导航
import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';
Vue.component(NavBar.name, NavBar);
Vue.component(NavBarBackIcon.name, NavBarBackIcon);
Vue.component(NavBarNextIcon.name, NavBarNextIcon);
//搜索
import {Search} from 'vue-ydui/dist/lib.rem/search';
Vue.component(Search.name, Search);
//提示信息
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
Vue.prototype.$dialog = {
    confirm: Confirm,
    alert: Alert,
    toast: Toast,
    notify: Notify,
    loading: Loading,
};
//网格
import {GridsGroup, GridsItem} from 'vue-ydui/dist/lib.rem/grids';
Vue.component(GridsGroup.name, GridsGroup);
Vue.component(GridsItem.name, GridsItem);
//布局(layout)
import {Layout} from 'vue-ydui/dist/lib.rem/layout';
Vue.component(Layout.name, Layout);
//布局(flexbox)
import {FlexBox, FlexBoxItem} from 'vue-ydui/dist/lib.rem/flexbox';
Vue.component(FlexBox.name, FlexBox);
Vue.component(FlexBoxItem.name, FlexBoxItem);
Vue.config.productionTip = false
//列表
import {ListTheme, ListItem, ListOther} from 'vue-ydui/dist/lib.rem/list';
Vue.component(ListTheme.name, ListTheme);
Vue.component(ListItem.name, ListItem);
Vue.component(ListOther.name, ListOther);
//表单
import {CellGroup, CellItem} from 'vue-ydui/dist/lib.rem/cell';
Vue.component(CellGroup.name, CellGroup);
Vue.component(CellItem.name, CellItem);
//时间选择器
import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
Vue.component(DateTime.name, DateTime);
import {Input} from 'vue-ydui/dist/lib.rem/input';
Vue.component(Input.name, Input);
//二级联动
import 'vue-ydui/dist/ydui.base.css';
import {CitySelect} from 'vue-ydui/dist/lib.rem/cityselect';
Vue.component(CitySelect.name, CitySelect);
new Vue({
  router,
  store,
  axio,
  render: h => h(App)
}).$mount('#app')
