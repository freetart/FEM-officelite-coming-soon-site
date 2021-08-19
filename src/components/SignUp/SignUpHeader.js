import styled from "styled-components";
import { MainHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Countdown from "../Shared/Countdown";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import SignUpForm from "./SignUpForm";
import bgPattern from "../../assets/sign-up/bg-pattern-side.svg";
import Responsive from "../../abstracts/Responsive";

const Header = styled.header`
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: url(${bgPattern}) top center/cover no-repeat;
  background-color: var(--veryDarkBlue);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
  align-items: center;

  ${Responsive.lg`
    text-align: center; 
  `}

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}
`;

const SignUpHeader = () => {
  return (
    <Header>
      <Container>
        <div className="signup-header-info">
          <MainHeading signup>Work smarter. Save time.</MainHeading>
          <Paragraph hero>
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </Paragraph>
          <Countdown />
        </div>
        <SignUpForm />
      </Container>
    </Header>
  );
};

export default SignUpHeader;
