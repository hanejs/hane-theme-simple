import React from 'react'

import Content from './content'

class Layout extends React.Component {
  componentWillMount () {
    //
  }

  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
        {this.props.item.slice(120, 140).map((item, i) => {
          return <Content key={i} {...item} />
        })}
        </body>
      </html>
    )
  }
}

export default Layout

