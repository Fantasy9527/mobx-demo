import React, { Component } from 'react'
import { toogleTab } from './action'
import cs from 'classnames'
class TabComponent extends Component {
  toggleTab(currentItem) {
    const { dispatch } = this.props
    dispatch(toogleTab(currentItem))
  }
  render() {
    // Redux 版本专用
    return (
      <ul className='nav nav-tabs'>
        {this.props.tabLists.map((item, index) => {
          return (
            <li
              onClick={() => {
                this.toggleTab(item)
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
export default TabComponent
