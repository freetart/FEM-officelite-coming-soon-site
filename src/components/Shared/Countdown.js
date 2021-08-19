import { useState, useEffect } from "react";
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
  // get future date & current date
  const [time, setTime] = useState(
    new Date("June 8, 2022 00:00:00").getTime() || 0
  );
  const now = new Date().getTime();
  const gap = time - now;

  // store time values
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate time values
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  // update every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div data-aos="fade-in" data-aos-delay="400">
      <Container>
        <h2 className="countdown-title">
          Coming <span className="countdown-time">8 June 2022</span>
        </h2>
        <div className="countdown">
          <Count number={textDay} time="days" />
          <Count number={textHour} time="hours" />
          <Count number={textMinute} time="minutes" />
          <Count number={textSecond} time="seconds" />
        </div>
      </Container>
    </div>
  );
};

export default Countdown;
