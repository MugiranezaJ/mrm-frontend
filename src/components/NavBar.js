import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logoutAction } from '../redux/actions/login-action';
import Button from './Button';
function NavBar(props) {
    console.log(props)
    const {authenticated, setAuthenticated, doLogout } = props
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    const role = localStorage.getItem("role")
    const isAdmin = (role === "Admin")
    const logout = () => {
      doLogout()
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
              <i className={click ? "x" : "="}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => {
      dispatch(logoutAction())
    },
  }
}

export {NavBar};
export default connect(null, mapDispatchToProps )(NavBar);