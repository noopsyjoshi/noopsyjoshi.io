import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import PaperLondon from './views/PaperLondon';
import TheCollective from './views/TheCollective';
import Thanos from './views/Thanos';
import SpaceInvaders from './views/SpaceInvaders';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/paperlondon',
      name: 'paperlondon',
      component: PaperLondon,
    },
    {
      path: '/thecollective',
      name: 'thecollective',
      component: TheCollective,
    },
    {
      path: '/thanos',
      name: 'thanos',
      component: Thanos,
    },
    {
      path: '/spaceinvaders',
      name: 'spaceinvaders',
      component: SpaceInvaders,
    },
  ],
});