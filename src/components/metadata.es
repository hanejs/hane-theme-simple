import React from 'react'

class Metadata extends React.Component {
  componentWillMount () {
    //
  }

  render () {
    return (
      <head>
        <meta charSet="utf-8" />
        <title>hanejs</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href="style.css" />
      </head>
    )
  }
}

export default Metadata
