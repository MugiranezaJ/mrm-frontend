import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory()
  const [authenticated, setAuthenticated] = React.useState(false)
  const [role, setRole] = React.useState('')
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const role = localStorage.getItem("role")
    if (loggedInUser) {
    setAuthenticated(true);
    setRole(role)
    }
  }, []);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter history={history}>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        <AppRoutes authenticated={authenticated} setAuthenticated={setAuthenticated}/>
    </BrowserRouter>
  );
}

export default App;
