import Vue from 'vue';
import Router from 'vue-router';

import AppointmentPage from '../appointment/AppointmentPage'
import LoginPage from '../login/LoginPage'
import SessionPage from '../session/SessionPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/appointment', component: AppointmentPage },
    { path: '/login', component: LoginPage },
    { path: '/session', component: SessionPage },

    { path: '*', redirect: '/session' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('session');

  if (authRequired && !loggedIn) {
    return next({ 
      path: '/login', 
      query: { returnUrl: to.path } 
    });
  }

  next();
})