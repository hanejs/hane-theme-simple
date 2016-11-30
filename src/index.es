import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import React from 'react'

import Layout from './components/layout'

global.hane = {}
hane.Theme = class {
  constructor () {
    this.config = {}
    this.data = {}
  }
  _format (data) {
    return data
  }
}

class SimpleTheme extends hane.Theme {
  constructor (data) {
    super()
    this.data = this._format(data)
  }
  render () {
    let layout = React.createElement(Layout, this.data)
    return ReactDOMServer.renderToString(layout)
  }
}

