import React from 'react'

import Article from './article'

class IndexContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.data || []
    }
  }

  render () {
    return (
    <main className="site-main">
      {this.state.items.map((item, i) => {
        return <Article key={i} {...item} />
      })}
    </main>
    )
  }
}

class ItemContent extends React.Component {
  constructor (props) {
    super(props)
    let items = this.props.data || []
    this.state = {
      item: items.pop() || {}
    }
  }

  render () {
    return (
      <main className="site-main">
        <Article {...this.state.item} />
      </main>
    )
  }
}

export {IndexContent, ItemContent}

