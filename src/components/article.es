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
          <a className="entry-title" href={url}>
            <h2>{title}</h2>
          </a>
          <span className="posted-on">
            <time dateTime={createTime}>{ moment(createTime).format('LLLL') }</time>
          </span>
        </header>
        <div className="entry-content"
             dangerouslySetInnerHTML={{ __html: index ? this.props.shortContent : this.props.content }}>
        </div>
        {index &&
          <a className="read-more" href={url}>...Read More</a>
        }
        {/*
          <footer className="entry-footer">
          </footer>
        */}
      </article>
    )
  }
}
