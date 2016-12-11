import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import React from 'react'

import Metadata from './components/metadata'
import Layout from './components/layout'

global.hane = {}
hane.Theme = class {
  constructor (data) {
    this.config = {}
    this.data = data || {}
    this.initialContentType = 'index'
  }
  getMetadata (options = {}) {
    return React.createElement(Metadata)
  }
  getLayout (options = {}) {
    return React.createElement(Layout, this)
  }
  setContenType (v) {
    this.initialContentType = v
  }
}

class SimpleTheme extends hane.Theme {
  constructor (data, options = {}) {
    super(data)
  }

  render (initialContentType = 'index', callback = (element) => {
    return ReactDOMServer.renderToString(element)
  }) {
    this.setContenType(initialContentType)

    return callback(
      <html>
        {this.getMetadata()}
        <body>
        {this.getLayout()}
        </body>
      </html>
    )
  }
}

export default SimpleTheme
