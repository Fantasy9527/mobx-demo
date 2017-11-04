import React, { Component } from 'react'
import Store from '../Store'
import { observer } from 'mobx-react'

@observer
class ColorButton extends Component {
  render() {
    return (
      <button
        onClick={Store.logCount.bind(Store)}
        style={{ minWidth: 60, height: 40, background: '#222', color: '#fff' }}
      >
        ColorButton
      </button>
    )
  }
}
export default ColorButton
