import React from 'react'

require('./../style.less')

class Header extends React.Component {
  componentWillMount () {
    //
  }

  render () {
    return (
      <head>
        <meta charset="utf-8" />
        <title>hanejs</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="favicon.ico" />

      </head>
    )
  }
}

export default Header
