import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./Components/Header/Homepage/HomePage";
import UserDetails from "./Components/UserDetails/UserDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/explore/:userId">
          <UserDetails />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
