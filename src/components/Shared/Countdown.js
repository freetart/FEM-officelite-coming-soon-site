import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Count from "./Count";

const Container = styled.div`
  &.signup-countdown {
    .countdown-title {
      color: var(--darkBlue);
    }
  }

  .countdown-title {
    ${textStyles}
    text-transform: uppercase;
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 1rem;
  }

  .countdown-time {
    color: var(--blue);
  }

  .countdown {
    display: flex;
    align-items: center;
    gap: var(--gap);
    position: relative;
    z-index: 5;
  }
`;

const Countdown = ({ signup }) => {
  return (
    <div>
      <Container className={signup && "signup-countdown"}>
        <h2 className="countdown-title">
          Coming <span className="countdown-time">4 Nov 2021</span>
        </h2>
        <div className="countdown">
          <Count number="47" time="days" />
          <Count number="07" time="hours" />
          <Count number="56" time="minutes" />
          <Count number="14" time="seconds" />
        </div>
      </Container>
    </div>
  );
};

export default Countdown;
