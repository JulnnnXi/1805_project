import { createStore, combineReducers, applyMiddleware } from 'redux';
import homedata from '@/components/Home/store'
import furniture from '@/components/Furniture/store'
import recommended from '@/components/Recommended/store'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  homedata, // 首页的内容
  furniture,
  recommended
});

const store = createStore(reducer, applyMiddleware(thunk)); // 有且只有一个，不用更改

export default store;