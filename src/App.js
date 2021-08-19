import styled from "styled-components";
import Globals from "./abstracts/Globals";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { maxWidthLg, sectionSpacingSm } from "./abstracts/Mixins";
import Responsive from "./abstracts/Responsive";

const Nav = styled.nav`
  ${maxWidthLg}
  ${sectionSpacingSm}
  position: relative;
  z-index: 5;
  background: transparent;

  ${Responsive.lg`
    text-align: center;
  `}

  .logo {
    width: 20rem;
    pointer-events: all;
  }
`;

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Nav>
          <Link to="/">
            <img className="logo" src={logo} alt="officelite logo" />
          </Link>
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
