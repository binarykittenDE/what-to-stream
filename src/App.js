import React from 'react';
import './App.scss';
import {
    Switch,
    Route,
} from 'react-router-dom'
import Home from "./components/Home/Home";
import Suggestion from "./components/Suggestion/Suggestion";
import Impressum from "./components/Impressum/Impressum";

function App() {
  return (
        <div className="App">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/suggestion" component={Suggestion} />
                <Route path="/impressum" component={Impressum} />
                {/*<Route component={Error} />*/}
            </Switch>
        </div>
  );
}

export default App;
