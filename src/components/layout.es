import React from 'react'

import Header from './header'
import {IndexContent, ItemContent} from './content'

class Layout extends React.Component {
  constructor (theme) {
    super(theme)
    let data = theme.data || {}
    this.state = {
      contentType: theme.initialContentType,
      categories: data['wp:category'] || [],
      tags: data['wp:tag'] || []
    }
  }

  getContent () {
    let reactElement
    switch (this.state.contentType) {
      case 'item':
        reactElement = React.createElement(ItemContent, {...this.state.data})
        break
      case 'index':
      default:
        reactElement = React.createElement(IndexContent, {...this.state.data})
    }
    return reactElement
  }

  render () {
    return (
      <div className="site">
        <div className="site-inner">
          <Header />
          <div className="site-content">
            <div className="content-area">
              {this.getContent()}
            </div>
            <aside className="sidebar">
              <section className="widget">
                <h2 className="widget-title">Categories</h2>
                <ul>
                {this.state.categories.map((category, i) => {
                  return <li key={i}>{category['wp:cat_name']}</li>
                })}
                </ul>
              </section>
              <section className="widget">
                <h2 className="widget-title">Tags</h2>
                <ul>
                {this.state.tags.map((category, i) => {
                  return <li key={i}>{category['wp:tag_name']}</li>
                })}
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
