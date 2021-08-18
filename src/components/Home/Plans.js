import styled from "styled-components";
import Plan from "./Plan";
import planData from "../../data";
import { maxWidthLg } from "../../abstracts/Mixins";

const Container = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap);
  transform: translateY(20rem);
`;

const Plans = () => {
  return (
    <section>
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
          />
        ))}
      </Container>
    </section>
  );
};

export default Plans;
