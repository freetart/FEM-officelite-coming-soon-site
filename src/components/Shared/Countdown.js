import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Count from "./Count";
import Responsive from "../../abstracts/Responsive";

const Container = styled.div`
  .countdown-title {
    ${textStyles}
    text-transform: uppercase;
    font-size: 2.6rem;
    color: var(--white);
    margin-bottom: 1rem;

    ${Responsive.md`
      text-align: center;
    `}
  }

  .countdown-time {
    color: var(--blue);
  }

  .countdown {
    display: flex;
    align-items: center;
    gap: var(--gap);
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 5;
  }
`;

const Countdown = () => {
  return (
    <div>
      <Container>
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
