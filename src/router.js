import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index/index.vue';
import Community from '@/views/community/community.vue';
import Diary from '@/views/diary/diary.vue';
import Publish from '@/views/publish/publish.vue';
import My from '@/views/my/my.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'bg-green',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'index',
      },
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary,
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish,
    },
    {
      path: '/my',
      name: 'my',
      component: My,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
