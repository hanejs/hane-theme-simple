import React, { Component } from 'react'

import Article from './article'

export class IndexContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.data || []
    }
  }

  render () {
    const { prevUrl, nextUrl } = this.props
    const { items } = this.state
    return (
      <main className="site-main site-article-list">
        {items.map((item, i) => {
          return <Article key={i} {...item} index={true} />
        })}
        <ul className="pagination">
          {prevUrl &&
            <li title="Prev Page">
              <a href={prevUrl}>Prev Page</a>
            </li>
          }
          {nextUrl &&
            <li title="Next Page">
              <a href={nextUrl}>Next Page</a>
            </li>
          }
        </ul>
      </main>
    )
  }
}

export class ItemContent extends Component {
  constructor (props) {
    super(props)
    const item = this.props.data || {}
    this.state = { item }
  }

  render () {
    return (
      <main className="site-main">
        <Article {...this.state.item} />
      </main>
    )
  }
}
