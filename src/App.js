import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Input from './Pages/Input';
import Header from "./Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Header/>
          <Main />
        </Route>
        <Route path="/input" exact>
          <Header/>
          <Input />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
