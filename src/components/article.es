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
    const { index, url, title, ctags, createTime } = this.props
    if (index) {
      return (
        <div className="article">
          <div className="entry-header">
            <a className="entry-title" href={url}>
              <h2>{title}</h2>
            </a>
            <span className="posted-on">
              <time dateTime={createTime}>{ moment(createTime).format('LLLL') }</time>
            </span>
          </div>
          <div className="entry-content"
               dangerouslySetInnerHTML={{ __html: this.props.shortContent }}>
          </div>
          <a className="read-more" href={url}>Read More</a>
        </div>
      )
    }
    return (
      <article className="article">
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
          <a className="read-more" href={url}>Read More</a>
        }
        {!index &&
          <div className="entry-footer">
            {
              ctags && ctags.length > 0
              ? <h5 className="entry-tags-title">Tags:</h5>
              : undefined
            }
            {
              ctags && ctags.length > 0
              ? (
                <ul className="entry-tags">
                {ctags.map((tag, i) => (
                  <li key={i}><a target="_blank" href={tag.url} title={tag.name}>{ tag.name }</a></li>
                ))}
                </ul>
              )
              : undefined
            }
          </div>
        }
      </article>
    )
  }
}
