import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.span`
  ${headingStyles}
  border: 0;
  outline: 0;
  border-radius: var(--btnRadius);
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  display: inline-block;
  box-shadow: var(--mainShadow);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--blue);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--lightBlue);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--veryLightBlue);
      color: var(--blue);

      &:hover,
      &:focus {
        background-color: var(--veryLightBlueActive);
      }
    `}

    ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: var(--white);
      color: var(--blue);

      &:hover,
      &:focus {
        color: var(--lightBlue);
      }
    `};
`;

export default Button;
