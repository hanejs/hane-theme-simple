import React from 'react'

class Content extends React.Component {
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
        <h3>{this.title}</h3>
        <p>{this.content}</p>
      </article>
    )
  }
}

export default Content

