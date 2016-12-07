import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import React from 'react'

import Header from './components/header'
import Layout from './components/layout'
import Footer from './components/footer'

global.hane = {}
hane.Theme = class {
  constructor (data) {
    this.config = {}
    this.data = data || {}
    this.layout = 'index'
  }
  _format (data) {
    return data
  }
  getHeader (options = {}) {
    return React.createElement(Header, this.data)
  }
  getLayout (options = {}) {
    return React.createElement(Layout, this.data)
  }
  getFooter (options = {}) {
    return React.createElement(Footer, this.data)
  }

}

class SimpleTheme extends hane.Theme {
  constructor (data) {
    super(data)

    return (
      <html>
        {this.getHeader()}
        {this.getLayout()}
        {this.getFooter()}
      </html>
    )
  }
}

