import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ShcoolList',
      name: 'ShcoolList',
      component: () => import(/* webpackChunkName: "about" */ './views/ShcoolList.vue')
    },
    {
        path: '/SociologyIntro',
        name: 'SociologyIntro',
        component: () => import(/* webpackChunkName: "about" */ './views/SociologyIntro.vue')
    },{
      path: '/shcoolListDetail',
      name: 'shcoolListDetail',
      component: () => import(/* webpackChunkName: "about" */ './components/schoollist/schoolListDetail.vue')
    },
    {
        path: '/baseInformation',
        name: 'baseInformation',
        component: () => import(/* webpackChunkName: "about" */ './components/curriculum/baseInformation.vue')
    },
    {
        path: '/Curriculum/:type',
        name: 'Curriculum',
        component: () => import(/* webpackChunkName: "about" */ './components/curriculum/Curriculum.vue')
    },
    {
        path: '/Resume/:type',
        name: 'Resume',
        component: () => import(/* webpackChunkName: "about" */ './components/curriculum/Resume.vue')
    },
    {
        path: '/ReumenShowExp',
        name: 'ReumenShowExp',
        component: () => import(/* webpackChunkName: "about" */ './components/curriculum/ReumenShowExp.vue')
    },
    {
        path: '/Editjob',
        name: 'Editjob',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editjob.vue')
    },
    {
        path: '/Editpro',
        name: 'Editpro',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editpro.vue')
    },
    {
        path: '/Editaward',
        name: 'Editaward',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editaward.vue')
    },
    {
        path: '/Editcert',
        name: 'Editcert',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editcert.vue')
    },
    {
        path: '/Editedu',
        name: 'Editedu',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editedu.vue')
    },
    {
        path: '/Editlagu',
        name: 'Editlagu',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editlagu.vue')
    },
    {
        path: '/Editskill',
        name: 'Editskill',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Editskill.vue')
    },
    {
        path: '/Edittrian',
        name: 'Edittrian',
        component: () => import(/* webpackChunkName: "about" */ './components/editexprience/Edittrian.vue')
    },

  ]
})
