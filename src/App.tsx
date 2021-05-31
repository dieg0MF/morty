import React from 'react';
import Header from './Components/shared/Header.js';
import Main from './Components/pages/Main.js';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./routes/Routes";
import AppProvider from "./AppProvider";


function App() {
  return (
    <div className="App">
      <Header></Header>  
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                Key={route.path}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
      </Router> 
      <Main></Main>   
    </div>
  );
}


