import styled, { css } from "styled-components";
import { headingStyles, textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}

  ${({ hero }) =>
    hero &&
    css`
      font-size: 1.8rem;
      color: var(--grayishBlue);
      padding: 2rem 0;
    `}

  ${({ count }) =>
    count &&
    css`
      ${headingStyles}
      font-size: 1.6rem;
      color: var(--grayishBlue);
    `}

  ${({ countSignup }) =>
    countSignup &&
    css`
      ${headingStyles}
      font-size: 1.6rem;
      color: var(--blue);
    `}
`;

export default Paragraph;
