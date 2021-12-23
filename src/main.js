// =========================================================
// * Vue Material Dashboard - v1.5.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import initializeApp from "firebase/compat/app";
require ("firebase/compat/auth")

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import Chartist from "chartist";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

router.beforeEach((to,from,next) => {
  const currentUser = initializeApp.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next ('login');
  else if(!requiresAuth && currentUser) next ('dashboard');
  else next();
});

const firebaseConfig = {
  apiKey: "AIzaSyCCouTcYTDdoMP_ZXIvvCfjGJuVvqn4If0",
  authDomain: "pt-vue.firebaseapp.com",
  projectId: "pt-vue",
  storageBucket: "pt-vue.appspot.com",
  messagingSenderId: "938453261941",
  appId: "1:938453261941:web:8c8d4a286f63737dfba23c"
};

initializeApp.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);


Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(initializeApp);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  data: {
    Chartist: Chartist,
  },
});
