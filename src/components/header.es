import React from 'react'

class Header extends React.Component {
  componentWillMount () {
    //
  }

  render () {
    return (
      <header className="site-header">
        <div className="site-header-main">
          <div className="site-branding">
            <h1 className="site-title">hanejs</h1>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
