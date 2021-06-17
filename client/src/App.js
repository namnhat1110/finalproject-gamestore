import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage, GameDetailPage, LoginPage, AuthPage, FourOhFourPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={`/login`} component={LoginPage} />
        <Route exact path={`/register`} component={AuthPage} />
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/games/:id`} component={GameDetailPage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
