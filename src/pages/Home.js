import styled from "styled-components";
import Header from "../components/Home/Header";
import Plans from "../components/Home/Plans";
import Cta from "../components/Home/Cta";
import Tag from "../components/Shared/Tag";
import logo from "../assets/shared/logo.svg";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

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

const Home = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      <Nav>
        <img className="logo" src={logo} alt="officelite logo" />
      </Nav>
      <Header scrollToTop={scrollToTop} />
      <main>
        <Plans scrollToTop={scrollToTop} />
        <Cta scrollToTop={scrollToTop} />
      </main>
      <Tag />
    </>
  );
};

export default Home;
