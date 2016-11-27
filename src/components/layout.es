import React from 'react'

class Layout extends React.Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    //
  }

  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
      </html>
    )
  }
}

export default Layout

