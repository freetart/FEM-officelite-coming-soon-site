import styled from "styled-components";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import Countdown from "../Shared/Countdown";
import Button from "../styledElements/Buttons";
import bgPattern from "../../assets/home/bg-pattern-footer.svg";
import { Link } from "react-router-dom";
import Responsive from "../../abstracts/Responsive";

const Section = styled.section`
  background-color: var(--veryDarkBlue);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  padding-top: 35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap);
  overflow: hidden;

  ${Responsive.md`
    justify-content: center;
  `}

  .cta-bg-pattern {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index: 1;

    ${Responsive.lg`
      width: 75%;
    `}

    ${Responsive.sm`
      width: 100%;
      bottom: 0%;
      left: 0%;
    `}
  }
`;

const Cta = () => {
  return (
    <Section>
      <Container>
        <img className="cta-bg-pattern" src={bgPattern} alt="" />
        <Countdown />
        <Link to="/SignUp">
          <Button primary>Get Started</Button>
        </Link>
      </Container>
    </Section>
  );
};

export default Cta;
