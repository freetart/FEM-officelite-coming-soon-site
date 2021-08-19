import styled from "styled-components";
import { MainHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Countdown from "../Shared/Countdown";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import SignUpForm from "./SignUpForm";
import bgPattern from "../../assets/sign-up/bg-pattern-side.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
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
