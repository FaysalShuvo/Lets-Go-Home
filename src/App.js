import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import SignUpFrom from "./components/SignUpFrom/SignUpFrom";
import Login from "./components/SignUpFrom/Login/Login";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/destination">
          <Destination />
        </Route>
        <Route path="/signup">
          <SignUpFrom />
        </Route>
        <Route  path="/login">
          <Login />
        </Route>
        <Route path="*">
          <h1>404 - Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
