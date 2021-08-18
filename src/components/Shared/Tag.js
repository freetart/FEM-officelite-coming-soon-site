import styled from "styled-components";
import { flexCenter, textStyles, headingStyles } from "../../abstracts/Mixins";
import logo from "../../assets/logo/habibdevgif.gif";

const Footer = styled.footer`
  ${flexCenter};
  flex-wrap: wrap;
  padding: 5rem 2rem 1rem 2rem;
  background-color: var(--veryDarkBlue);

  .tag-heading {
    ${textStyles};
    font-size: var(--xs);
    color: var(--white);
    text-align: center;
  }

  .tag-link {
    ${headingStyles};
    color: var(--blue);

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .tag-logo {
    width: 5rem;
  }
`;

const Tag = () => {
  return (
    <Footer>
      <h3 className="tag-heading">
        project for{" "}
        <a
          href="https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g"
          target="_blank"
          rel="noreferrer"
          className="tag-link"
        >
          frontend mentor
        </a>{" "}
        coded by{" "}
        <a
          href="https://github.com/habibdev96"
          target="_blank"
          rel="noreferrer"
          className="tag-link"
        >
          habibdev{" "}
        </a>
      </h3>
      <img src={logo} alt="logo" className="tag-logo" />
    </Footer>
  );
};

export default Tag;
