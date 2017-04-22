import React from 'react'

import Header from './header'
import {IndexContent, ItemContent} from './content'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    let data = props.data || {}
    this.state = {
      contentType: props.contentType,
      posts: data['posts'] || [],
      categories: data['categories'] || [],
      tags: data['tags'] || [],
    }
    switch (this.state.contentType) {
    case 'item':
      this.state.contentData = data['post']
      break
    case 'index':
      this.state.contentData = this.state.posts
      this.state.nextUrl = data['nextUrl']
      this.state.prevUrl = data['prevUrl']
      break
    }
  }

  getContent () {
    let reactElement
    const { contentData } = this.state
    switch (this.state.contentType) {
      case 'item':
        reactElement = <ItemContent data={contentData} />
        break
      case 'index':
        reactElement = <IndexContent data={contentData}
                                     prevUrl={this.state.prevUrl}
                                     nextUrl={this.state.nextUrl} />
        break
    }
    return reactElement
  }

  render () {
    const { categories, tags } = this.state
    return (
      <div className="site">
        <div className="site-inner">
          <Header />
          <div className="site-content">
            <div className="content-area">
              {this.getContent()}
            </div>
            <aside className="sidebar">
              {categories.length > 0 &&
                <section className="widget">
                  <h2 className="widget-title">Categories</h2>
                  <ul>
                  {categories.map((category, i) => {
                    return <li key={i}>{category['name']}</li>
                  })}
                  </ul>
                </section>
              }
              <section className="widget">
                <h2 className="widget-title">Tags</h2>
                <ul>
                {tags.map((tag, i) => {
                  return <li key={i}>{tag['name']}</li>
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
