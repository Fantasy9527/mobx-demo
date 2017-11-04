import { observable, computed, action } from 'MobX'
class Store {
  @observable count = 1;
  @action
  logCount() {
    this.count++
    console.log(this.count)
  }
  @computed
  get total() {
    return this.count * 100
  }
  @computed
  get formatMoney() {
    return this.count.replace(/[^0-9-.]/g, '')
  }
}
export default new Store()
