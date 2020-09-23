import Vue from "vue";
import VueRouter from "vue-router";

import Cookie from "./../utils/cookie"

//import Home from "../views/Home.vue";

import Login from '@/components/Login'
import Register from '@/components/Register'
import RegisterLi from '@/components/RegisterLi'
import RegisterForm from '@/components/RegisterForm'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    children:[
      {
        path: '',
        name: 'schoolType',
        component: RegisterLi,
        meta: {
          title: '选择身份'
        }
      } ,
      {
        path: 'regform',
        name: 'regform',
        component: RegisterForm,
        meta: {
          title: '注册提交'
        }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/resource",
    name: "Resource",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Resource.vue"),
    meta: {
      auth:true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(m=>m.meta.auth)) {
    if (Cookie.getCookie('username')) { //已经登陆
      next()
    }else{
      next({path:'/login',query:{referrer:'login'}})
    }
  }else{
    next() // 没有meta auth 需要验证的
  }
})
export default router;
