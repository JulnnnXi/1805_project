import { createStore, combineReducers, applyMiddleware } from 'redux';
import homedata from '@/components/Home/store'
import thunk from 'redux-thunk'
import recommended from '@/components/Recommended/store'
import House from '@/components/House/store'

const reducer = combineReducers({
  homedata, // 首页的内容
  recommended,
  House
});

const store = createStore(reducer, applyMiddleware(thunk)); // 有且只有一个，不用更改

export default store;
