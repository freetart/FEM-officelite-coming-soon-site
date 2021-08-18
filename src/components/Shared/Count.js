import styled from "styled-components";
import { SubHeading } from "../styledElements/Headings";
import Paragraph from "../styledElements/Paragraphs";

const Article = styled.article`
  background-color: var(--darkBlue);
  text-align: center;
  padding: 2rem;
  border-radius: var(--mainRadius);
`;

const Count = ({ number, time }) => {
  return (
    <Article>
      <SubHeading count>{number}</SubHeading>
      <Paragraph count>{time}</Paragraph>
    </Article>
  );
};

export default Count;
