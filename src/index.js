import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '@/components/App';
import Pages from '@/components/Pages';
import ErrorBoundary from '@/components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import store from '@/store'
import './main.scss';

render() // 一进来默认执行一次

// store.subscribe(render);

function render () {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store = { store }>
      <Router>
        <Switch>
        <Route path='/Pages/:id' component = { Pages } />
          <Route path='/' component = { App } />
        </Switch>
      </Router>
      </Provider>
    </ErrorBoundary>
    , document.getElementById('root'))
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();