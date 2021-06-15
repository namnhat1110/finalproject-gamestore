import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage, LoginPage, AuthPage, FourOhFourPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={AuthPage} />
        <Route exact path={"/"} component={HomePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
