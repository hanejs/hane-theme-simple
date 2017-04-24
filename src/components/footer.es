import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { blog } = this.props
    const fullYear = new Date().getFullYear()
    return (
      <footer>
        © { fullYear } { blog.author }, powered by <a target="_blank" href="https://github.com/hanejs">hanejs</a>
      </footer>
    )
  }
}
