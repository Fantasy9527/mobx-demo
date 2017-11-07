import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabStore from './TabStore'
import cs from 'classnames'

function toggleTab(currentItem) {
  TabStore.tabList.forEach(item => {
    item.active = false
  })
  currentItem.active = true
}

@observer
class TabMobxComponent extends Component {
  render() {
    return (
      <ul className='nav nav-tabs'>
        {TabStore.tabList.map((item, index) => {
          return (
            <li
              onClick={function() {
                TabStore.toggleTab(item)
                // 非action
                // toggleTab()
              }}
              className={cs({ active: item.active })}
            >
              <a href='#'>{item.name}</a>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default TabMobxComponent
