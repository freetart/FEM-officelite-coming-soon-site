import styled from "styled-components";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import Countdown from "../Shared/Countdown";
import Button from "../styledElements/Buttons";
import bgPattern from "../../assets/home/bg-pattern-footer.svg";
import { Link } from "react-router-dom";

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
  overflow: hidden;

  .cta-bg-pattern {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    z-index: 1;
  }
`;

const Cta = () => {
  return (
    <Section>
      <Container>
        <img className="cta-bg-pattern" src={bgPattern} alt="" />
        <Countdown signup={false} />
        <Link to="/SignUp">
          <Button primary>Get Started</Button>
        </Link>
      </Container>
    </Section>
  );
};

export default Cta;
