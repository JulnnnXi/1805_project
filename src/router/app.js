import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User';
import Cart from '@/components/Cart';
import Msg from '@/components/Msg';
import ProductGroup from '@/components/ProductGroup/UI';
import Detail from '@/components/Detail'

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
  },
  {
    path: '/productGroup/:id',
    component: ProductGroup
  },
  {
    path: '/detail/:id',
    component: Detail
  }
];

export default routes;
