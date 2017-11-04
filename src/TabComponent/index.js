import React, { Component } from 'react'
import { observer } from 'mobx-react'
import cs from 'classnames'
class TabComponent extends Component {
  constructor() {
    super()
    this.state = {
      tabList: [
        {
          name: '标签1',
          active: true
        },
        {
          name: '标签2',
          active: false
        },
        {
          name: '标签3',
          active: false
        },
        {
          name: '标签4',
          active: false
        }
      ]
    }
  }
  toggleTab(currentItem) {
    this.state.tabList.forEach(item => {
      item.active = false
    })
    currentItem.active = true
    this.setState({ tabList: this.state.tabList })
  }
  render() {
    return (
      <ul className='nav nav-tabs'>
        {this.state.tabList.map((item, index) => {
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
