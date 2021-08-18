import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Button from "../styledElements/Buttons";
import headerImg from "../../assets/home/illustration-charts.svg";
import bgPattern from "../../assets/home/bg-pattern-header.svg";
import { maxWidthLg, sectionSpacingMd } from "../../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);

  .header-info,
  .header-img {
    position: relative;
    z-index: 5;
  }

  .header-bg-pattern {
    position: absolute;
    top: -25%;
    right: -10%;
    width: 65%;
    z-index: 1;
  }
`;

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-info">
          <MainHeading>
            A simple solution to complex tasks is coming soon
          </MainHeading>
          <Paragraph hero>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </Paragraph>
          <Link to="/SignUp">
            <Button primary>Get Started</Button>
          </Link>
        </div>
        <img className="header-img" src={headerImg} alt="charts" />
        <img className="header-bg-pattern" src={bgPattern} alt="" />
      </Container>
    </header>
  );
};

export default Header;
