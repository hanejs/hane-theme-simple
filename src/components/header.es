import React, { Component } from 'react'

export default class Header extends Component {
  componentWillMount() {
    //
  }
  render() {
    const { blog } = this.props
    return (
      <header className="site-header">
        <div className="site-header-main">
          <div className="site-branding">
            <a href={blog.publicUrl} title={blog.name}>
              <h1 className="site-title">{ blog.name }</h1>
            </a>
          </div>
        </div>
      </header>
    )
  }
}
