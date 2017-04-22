import React, { Component } from 'react'

export default class Article extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    //
  }

  render () {
    const { index, url, title } = this.props
    return (
      <article>
        <header className="entry-header">
          <a href={url}>
            <h2 className="entry-title">{title}</h2>
          </a>
        </header>
        <div className="entry-content"
             dangerouslySetInnerHTML={{ __html: index ? this.props.shortContent : this.props.content }}>
        </div>
        {index &&
          <a href={url}>...Read More</a>
        }
        <footer className="entry-footer">
          <span className="posted-on">
            <time dateTime={this.props.pubDate}>{this.props.pubDate}</time>
          </span>
        </footer>
      </article>
    )
  }
}
