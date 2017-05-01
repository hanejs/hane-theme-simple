import React, { Component } from 'react'

export default class Head extends Component {
  componentWillMount() {
    //
  }
  render() {
    const { title, blog } = this.props
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{ title } - { blog.title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="hanejs" />
        {blog.keywords && blog.keywords.length > 0
          ? <meta name="keywords" content={blog.keywords.join(',')} />
          : undefined
        }
        <link rel="apple-touch-icon" href={`${blog.publicUrl}images/apple-touch-icon.png`} />
        <link rel="shortcut icon" href={`${blog.publicUrl}favicon.ico`} />
        <link rel="alternate" href={`${blog.publicUrl}atom.xml`} type="application/atom+xml" title={`${blog.title} ATOM Feed`} />
        <link rel="search" href={`${blog.blogUrl}${blog.publicUrl}atom.xml`} type="application/opensearchdescription+xml" title={blog.title} />
        <link rel="stylesheet" type="text/css" href={`${blog.publicUrl}assets/css/style.css`} />
      </head>
    )
  }
}
