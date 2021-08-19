import styled from "styled-components";
import { MainHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";
import Countdown from "../Shared/Countdown";
import { maxWidthLg, sectionSpacingLg } from "../../abstracts/Mixins";
import SignUpForm from "./SignUpForm";
import bgPattern from "../../assets/sign-up/bg-pattern-side.svg";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;

  .signup-bg {
    background-color: var(--veryDarkBlue);
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

    &-pattern {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(2.5);
    }
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);
  align-items: center;

  .signup-header-info {
    transform: translateX(27rem);
  }
`;

const SignUpHeader = () => {
  return (
    <Header>
      <Container>
        <div className="signup-header-info">
          <MainHeading>Work smarter. Save time.</MainHeading>
          <Paragraph hero>
            Easily manage your projects. Get on the list and receive in-app
            perks available only to early subscribers. We are moving into final
            development and getting ready for official launch soon.
          </Paragraph>
          <Countdown signup={true} />
        </div>
        <SignUpForm />
      </Container>
      <div className="signup-bg">
        <img className="signup-bg-pattern" src={bgPattern} alt="" />
      </div>
    </Header>
  );
};

export default SignUpHeader;
