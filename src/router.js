import { createRouter, createWebHistory } from 'vue-router';
import List from './components/List.vue';
import Cart from './components/Cart.vue';

const routes=[
  {path:'/', component:List, props:true},
  {path:'/cart', component:Cart, props:true}
];
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;