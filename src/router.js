import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Events from './views/Events.vue';
import Games from './views/Games.vue';
import News from './views/News.vue';
import Pricing from './views/Pricing.vue';
import Home from './views/Home.vue';
import Fortnite from './views/FORTNITE.vue';
import Overwatch from './views/OVERWATCH.vue';
import Csgo from './views/CSGO.vue';
import Fifa from './views/FIFA.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/events',
    name: 'events',
    component: Events
  },
  { path: '/',
  name: 'Home',
  component: Home
},
  { path: '/games',
  name: 'games',
  component: Games
},
{ path: '/news',
name: 'news',
component: News
},
{ path: '/pricing',
name: 'pricing',
component: Pricing
},
{ path: '/Fortnite',
name: 'Fortnite',
component: Fortnite
},
{ path: '/Csgo',
name: 'Csgo',
component: Csgo
},
{ path: '/Overwatch',
name: 'Overwatch',
component: Overwatch
},
{ path: '/Fifa',
name: 'Fifa',
component: Fifa
},
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ],
});
