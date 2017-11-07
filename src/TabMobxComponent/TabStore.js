import { observable, computed, action, useStrict } from 'MobX'
// 严格模式,非action 不能修改store的数据
useStrict(true)
class Store {
  @observable
  tabList = [
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
  ];
  @action
  toggleTab(currentItem) {
    this.tabList.forEach(item => {
      item.active = false
    })
    currentItem.active = true
  }
}
export default new Store()
