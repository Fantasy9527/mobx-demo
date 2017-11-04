import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import RootStore from 'RootStore'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App rootStore={RootStore}/>, document.getElementById('root'))
registerServiceWorker()
