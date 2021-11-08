import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Team from '../views/Team.vue';
import Events from '../views/Events.vue';
import Photos from '../views/Photos.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
  {
    path: '/events',
    name: 'events',
    component: Events,
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
