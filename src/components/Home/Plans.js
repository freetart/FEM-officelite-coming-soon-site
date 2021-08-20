import styled from "styled-components";
import Plan from "./Plan";
import planData from "../../data";
import { maxWidthLg, sectionSpacingSm } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
  transform: translateY(20rem);

  ${Responsive.lg`
    grid-template-columns: 1fr;
  `}
`;

const Plans = ({ scrollToTop }) => {
  return (
    <section data-aos="fade-in" data-aos-delay="200">
      <Container>
        {planData.map((plan) => (
          <Plan
            key={plan.id}
            isPrimary={plan.isPrimary}
            type={plan.type}
            cost={plan.cost}
            description={plan.description}
            features={plan.features}
            buttonType={plan.buttonType}
            scrollToTop={scrollToTop}
          />
        ))}
      </Container>
    </section>
  );
};

export default Plans;
