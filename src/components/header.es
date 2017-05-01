import React, { Component } from 'react'

export default class Header extends Component {
  componentWillMount() {
    //
  }
  render() {
    const { blog, tabs, activeTab } = this.props
    return (
      <header className="site-header">
        <div className="site-header-main">
          <div className="site-branding">
            <a className="site-title" href={blog.publicUrl} title={blog.title}>
              <i></i>
              <h1>{ blog.title }</h1>
            </a>
          </div>
          <div className="site-tabs">
            <ul className="site-tab-nav">
              {tabs.map((t, i) => (
                <li key={i} className={activeTab === t.slug ? 'active' : undefined}>
                  <a href={t.url} title={t.title}>{ t.title }</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    )
  }
}
