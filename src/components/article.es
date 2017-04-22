import React, { Component } from 'react'
import moment from 'moment'

export default class Article extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    //
  }

  render () {
    const { index, url, title, createTime } = this.props
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
            <time dateTime={createTime}>{ moment(createTime).format('LLLL') }</time>
          </span>
        </footer>
      </article>
    )
  }
}
