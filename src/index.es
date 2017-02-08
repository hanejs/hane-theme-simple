import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import React from 'react'

import Metadata from './components/metadata'
import Layout from './components/layout'

if (!global.hane) {
  console.error('Please require in hanejs.')
  process.exit(1)
}

class SimpleTheme extends hane.Theme {
  constructor(options = {}) {
    super(options)
  }
  getMetadata(options = {}) {
    return React.createElement(Metadata)
  }
  getLayout(options = {}) {
    return React.createElement(Layout, this)
  }
  render(data, initialContentType = 'index') {
    this.data = data
    this.setContenType(initialContentType)

    return ReactDOMServer.renderToString(
      <html>
        {this.getMetadata()}
        <body>
        {this.getLayout()}
        </body>
      </html>
    )
  }
}

hane.Theme.register(SimpleTheme)
