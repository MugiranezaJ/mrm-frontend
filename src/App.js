import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory()
  const [authenticated, setAuthenticated] = React.useState(false)
  React.useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter history={history}>
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}/>
        <AppRoutes
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}/>
        
    </BrowserRouter>
  );
}

export default App;
