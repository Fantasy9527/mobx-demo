import React, { Component } from 'react'
import { connect } from 'react-redux'
import ColorButton from './ColorButtonComponent'
import TabComponent from './TabComponent'
import TabMobxComponent from './TabMobxComponent'
import TabShareComponent from './TabShareComponent'
import TabReduxComponent from './TabReduxComponent'
import Store from './Store'
import RootStore from 'RootStore'
import { observer } from 'mobx-react'
@observer
class App extends Component {
  render() {
    // Redux 版本专用
    const { dispatch } = this.props
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
        我是Redux的mobxtab
        <TabReduxComponent dispatch={dispatch} tabLists={this.props.tabs} />
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

// 基于全局 state ，哪些是我们想注入的 props ?
function store(state) {
  return {
    tabs: state.tabs
  }
}
export default connect(store)(App)
// export default App
