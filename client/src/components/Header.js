import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="left brand-logo" style={divStyle}>
            Starter App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

var divStyle = {
  marginLeft: 10
};

export default Header;
