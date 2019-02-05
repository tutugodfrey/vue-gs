import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users';
import Test from '@/components/Test';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    }
  ],
});

// new Vue({
// router,
// template: `
// <div>
//   <ul>
//     <li><router-link to='/'>User</router-link></li>
//     <li><router-link to='/test'>Test</router-link></li>
//   </ul>
//   <router-view></router-view>
// </div>
// `
// }).$mount('#app')
