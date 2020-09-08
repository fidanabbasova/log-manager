import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Loading from './components/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';

export const UserContext = createContext();
export const LoadingContext = createContext();

function App() {
  const [loading, setLoading] = useState(2);
  const [isAuthed, setIsAuthed] = useState(false);
  const [user, setUser] = useState({ name: '', surname: '' });
  const logout = () => {
    setLoading(2);
    setTimeout(() => {
      localStorage.removeItem('name');
      localStorage.removeItem('surname');
      localStorage.removeItem('log');
      setUser({ name: '', surname: '' });
      setIsAuthed(false);
      setLoading(0);
    }, 1000);
  }
  const checkAuthorization = () => {
    try {
      const decoded = JSON.parse(atob(localStorage.getItem('log')));
      if (decoded.name && decoded.surname) {
        setIsAuthed(true);
        setUser({ name: decoded.name, surname: decoded.surname });
      }
      else {
        setIsAuthed(false);
      }
    }
    catch (error) { }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(0);
      checkAuthorization();
    }, 1000);
  }, []);

  return (
    <LoadingContext.Provider value={{ setLoading }}>
      <UserContext.Provider value={{ isAuthed: isAuthed, setIsAuthed: setIsAuthed, user: user, setUser: setUser, logout: logout }}>
        {
          loading !== 0 && <Loading loading={loading} />
        }
        <Router>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route exact path="/dashboard" render={(routeProps) => <Dashboard {...routeProps} />} />
            <Route exact path="/login" render={(routeProps) => <Login {...routeProps} />} />
            <Route render={(routeProps) => <NotFound {...routeProps} />} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
