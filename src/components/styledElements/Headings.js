import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 5.6rem;
  color: var(--darkBlue);
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
