import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        // they are logged in
        return (
          <li>
            <a href="/api/logout">Log Out</a>
          </li>
        );
    }
  }

  render() {
    const headerUrl = this.props.auth ? '/packs' : '/';
    return (
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <Link to={headerUrl} className="left brand-logo" style={divStyle}>
            Starter App
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

var divStyle = {
  marginLeft: 10
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
