import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

window.localStorage.setItem('debug', 'leancloud*');

const appId = '0AwRKRTHbBvAUP8D8VaxJhzs-gzGzoHsz';
const appKey = 'MGGIMS48nNIh8dBK4r1vMRfu';
window.AV.init({ appId, appKey });

/*
var TestObject = window.AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
    words: 'Hello World!'
}).then(function(object) {
    alert('LeanCloud Rocks!');
});
*/

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
