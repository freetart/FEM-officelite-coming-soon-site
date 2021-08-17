import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.button`
  ${headingStyles}
  border: 0;
  outline: 0;
  border-radius: var(--btnRadius);
  padding: 1.5rem 2.5rem;
  font-size: 1.6rem;
  display: inline-block;
  box-shadow: var(--mainShadow);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--blue);
      color: var(--white);
    `}
`;

export default Button;