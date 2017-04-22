import React from 'react'

export default class Head extends React.Component {
  componentWillMount() {
    //
  }
  render() {
    const { title } = this.props
    return (
      <head>
        <meta charSet="utf-8" />
        <title>{ title } - hanejs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="generator" content="hanejs" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </head>
    )
  }
}
