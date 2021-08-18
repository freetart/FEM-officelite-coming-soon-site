import styled from "styled-components";
import { headingStyles, textStyles } from "../../abstracts/Mixins";
import Button from "../styledElements/Buttons";
import primaryPattern from "../../assets/home/bg-pattern-pricing.svg";

const Container = styled.div`
  text-align: center;
  padding: 3rem;
  box-shadow: var(--mainShadow);
  border-radius: var(--mainRadius);
  position: relative;
  overflow: hidden;

  &.plan-primary {
    background-color: var(--blue);
    color: var(--white);
  }

  .plan-pattern {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);
    z-index: 1;
  }

  .plan-content {
    position: relative;
    z-index: 5;
  }

  .plan-type {
    ${headingStyles}
    font-size: 2rem;
    padding-bottom: 4rem;
  }

  .plan-cost {
    ${headingStyles}
    font-size: 5.6rem;
  }

  .plan-desc {
    ${textStyles}
    font-size: 1.6rem;
  }

  .plan-list {
    padding: 4rem 0;
  }

  .plan-feature {
    ${textStyles}
    font-size: 1.6rem;
    padding: 1rem 0;
  }
`;

const Plan = ({ isPrimary, type, cost, description, features, buttonType }) => {
  return (
    <article>
      <Container className={isPrimary && "plan-primary"}>
        {isPrimary && (
          <img src={primaryPattern} alt="" className="plan-pattern" />
        )}
        <div className="plan-content">
          <p className="plan-type">{type}</p>
          <h3 className="plan-cost">{cost}</h3>
          <p className="plan-desc">{description}</p>
          <ul className="plan-list">
            {features.map((feature, index) => (
              <li key={index} className="plan-feature">
                {feature}
              </li>
            ))}
          </ul>
          {buttonType === "secondary" ? (
            <Button secondary>Try for Free</Button>
          ) : (
            <Button tertiary>Try for Free</Button>
          )}
        </div>
      </Container>
    </article>
  );
};

export default Plan;
