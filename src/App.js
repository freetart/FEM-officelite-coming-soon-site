import Globals from "./abstracts/Globals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
