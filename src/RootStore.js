import Store from './Store'
import TabStore from './TabMobxComponent/TabStore'
class RootStore {
  constructor() {
    this.Store = Store
    this.TabStore = TabStore
  }
}

export default new RootStore()
