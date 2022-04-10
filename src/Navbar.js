import React from "react";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
        <div className="nav-bar">
        <nav className="navbar navbar-dark light">
        <div className="container-fluid">
        <ul> <span className="navbar-brand mb-0 h1">EDNAM</span></ul>
        </div>
      </nav>
      
      {/* As a link */}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mb-0" href="https://www.ednams.com/">
            HOME</a>
        </div>
      </nav>
      {/* As a link */}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mb-0" href="https://www.ednams.com/startup-diaries.html">
            STARTUP DIARIES
          </a>
        </div>
      </nav>
     
    </div>
    );
  }
}

export default Navbar;
