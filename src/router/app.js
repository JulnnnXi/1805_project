import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User';
import Cart from '@/components/Cart';
import Msg from '@/components/Msg';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/msg',
    component: Msg
  }
];

export default routes;
