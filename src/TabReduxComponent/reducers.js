import { combineReducers } from 'redux'
import { TOOGLE_TAB } from './action'

let tabList = [
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
function tabs(state = tabList, action) {
  console.log(action)
  switch (action.type) {
    case TOOGLE_TAB:
      state.forEach(function(item) {
        item.active = false
        if (item.name === action.current.name) {
          item.active = true
        }
      }, this)
      // 直接返回对象不会生效
      // 要重新拷贝
      return Object.assign([], state)
    default:
      return state
  }
}

const tabsApp = combineReducers({
  tabs
})

export default tabsApp
