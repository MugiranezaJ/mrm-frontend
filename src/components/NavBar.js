import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from './Button';
function NavBar({authenticated, setAuthenticated}) {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    const role = localStorage.getItem("role")
    const isAdmin = (role == "admin")
    const logout = () => {
      localStorage.removeItem('user')
      setAuthenticated(false)
    }
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              MRM
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {authenticated ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/dashboard"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  {isAdmin && (<li className="nav-item">
                    <NavLink
                      exact
                      to="/all-users"
                      activeClassName="active"
                      className="nav-links"
                    onClick={click ? handleClick : null}
                    >
                      Users
                    </NavLink>
                  </li>)} 
                  <Button onClick={logout} className={"logout-button"} value={"Logout"}/>
                </>
              ):(
                <>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/login"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/register"
                      activeClassName="active"
                      className="nav-links"
                      onClick={click ? handleClick : null}
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}

            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
}

export default NavBar
