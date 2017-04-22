
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import htmlBeautify from 'html-beautify'

import Head from './components/head'
import Layout from './components/layout'

if (!global.hane) {
  console.error('Please require in hanejs.')
  process.exit(1)
}

const beautifyOpts = {
  indent_size: 2,
  preserve_newlines: false,
  space_after_anon_function: true,
  extra_liners: [],
}

class SimpleTheme extends hane.Theme {
  constructor(options = {}) {
    super(options)
  }
  getHead(data) {
    return <Head />
  }
  getLayout(data) {
    return <Layout data={this.data} contentType={this.initialContentType} />
  }
  render(data, contentType = 'index') {
    this.data = data
    this.setContenType(contentType)

    let html = ReactDOMServer.renderToString(
      <html>
        {this.getHead()}
        <body>
        {this.getLayout()}
        </body>
      </html>
    )
    html = '<!DOCTYPE html>' + html
    //html = htmlBeautify(html, beautifyOpts)
    return html
  }
}

hane.Theme.register(SimpleTheme)
