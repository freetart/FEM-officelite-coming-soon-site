import Globals from "./abstracts/Globals";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import logo from "./assets/shared/logo.svg";
import { maxWidthLg, sectionSpacingSm } from "./abstracts/Mixins";

const Nav = styled.nav`
  ${maxWidthLg}
  ${sectionSpacingSm}

  .logo {
    width: 20rem;
  }
`;

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Nav>
          <img className="logo" src={logo} alt="officelite logo" />
        </Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
