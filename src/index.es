
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import beautify from 'js-beautify'
import sanitizeHtml from 'sanitize-html'

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
    return <Head title={this.data.title} />
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
    html = sanitizeHtml(html, {
      allowedTags: false,
      allowedAttributes: false,
      transformTags: {
        '*': function (tagName, attribs) {
          const removeKeys = []
          for (const key in attribs) {
            if (key.startsWith('data-react')) {
              removeKeys.push(key)
            }
          }
          if (removeKeys.length > 0) {
            removeKeys.forEach(k => {
              delete attribs[k]
            })
          }
          return {
            tagName,
            attribs,
          }
        }
      }
    })
    html = beautify.html(html, beautifyOpts)
    html = '<!DOCTYPE html>\n' + html
    return html
  }
}

hane.Theme.register(SimpleTheme)
