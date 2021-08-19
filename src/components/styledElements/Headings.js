import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--darkBlue);

  ${Responsive.xs`
    font-size: 5rem;
  `}
`;

export const SubHeading = styled.h2`
  ${headingStyles}
  font-size: 5.6rem;

  ${({ count }) =>
    count &&
    css`
      color: var(--white);
    `}
`;
