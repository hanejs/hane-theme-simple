import ReactDOMServer from 'react-dom/server'
import React from 'react'

import Layout from './components/layout'

global.hane = {}
hane.Theme = class {
  constructor () {
    this.config = {
      title: 'hanejs'
    }
  }
}

class SimpleTheme extends hane.Theme {
  render () {
    let html = ReactDOMServer.renderToString(
      React.createElement(Layout, this.config)
    )

    console.log(html)
  }
}

let theme = new SimpleTheme()
theme.render()
