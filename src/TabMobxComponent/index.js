import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TabStore from './TabStore'
import cs from 'classnames'
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
