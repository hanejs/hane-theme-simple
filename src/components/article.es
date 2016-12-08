import React from 'react'

class Article extends React.Component {
  constructor (props) {
    super(props)
    this.title = this.props.title || ''
    this.content = this.props.content || ''
  }
  componentWillMount () {
    //
  }

  render () {
    return (
      <article>
        <header className="entry-header">
          <h2 className="entry-title">{this.title}</h2>
        </header>
        <div className="entry-content" dangerouslySetInnerHTML={{__html: this.content}}></div>
        <footer className="entry-footer">
          <span className="posted-on">
            <time dateTime={this.props.pubDate}>{this.props.pubDate}</time>
          </span>
        </footer>
      </article>
    )
  }
}

export default Article

