import React, { Component } from 'react'
import ColorButton from './ColorButtonComponent'
import TabComponent from './TabComponent'
import TabMobxComponent from './TabMobxComponent'
import TabShareComponent from './TabShareComponent'
import Store from './Store'
import RootStore from 'RootStore'
import { observer } from 'mobx-react'
@observer
class App extends Component {
  render() {
    return (
      <div>
        我是普通的tab
        <TabComponent />
        <hr />
        我是mobxtab
        <TabMobxComponent />
        <hr />
        我是共享了状态的mobxtab
        <TabShareComponent />
        <hr />
        <p>我是来自Store的count {Store.count}</p>
        <p>我是来自Store的computed {Store.total}</p>
        <button onClick={Store.logCount.bind(Store)}>点击控制Store</button>
        {
          <button onClick={RootStore.Store.logCount.bind(Store)}>
            点击控制RootStore
          </button>
        }
        <ColorButton />
      </div>
    )
  }
}

export default App
