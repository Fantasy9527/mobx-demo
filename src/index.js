import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// 下面是redux方式
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TabStore from './TabReduxComponent/reducers'
let store = createStore(TabStore)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
