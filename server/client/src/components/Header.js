import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding'
      case false:
        return 'im loggedout'
      default:
        return 'im logged in'
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>{this.renderContent()}</li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)
