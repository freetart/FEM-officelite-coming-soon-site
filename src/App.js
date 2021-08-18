import Globals from "./abstracts/Globals";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import logo from "./assets/shared/logo.svg";
import { maxWidthLg, sectionSpacingSm } from "./abstracts/Mixins";
import { Link } from "react-router-dom";
import Logo from "./components/styledElements/Logo";

// const Nav = styled.nav`
//   ${maxWidthLg}
//   ${sectionSpacingSm}
//   position: fixed;
//   background: transparent;

//   .logo {
//     width: 20rem;
//     pointer-events: all;
//   }
// `;

// <Nav>
//   <Link to="/">
//     <img className="logo" src={logo} alt="officelite logo" />
//   </Link>
// </Nav>

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <Link to="/">
          <Logo src={logo} alt="officelite logo" />
        </Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
