import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import HomePage from "../screens/HomePage"
import history from "../services/history"
const rootNavigation = () => {
  return (
    <div>
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} /> 
         

        
          

          
          


        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default rootNavigation;