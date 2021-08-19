import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Button from "../styledElements/Buttons";

const Container = styled.div`
  transform: translateX(40rem);
  background-color: var(--white);
  width: 600px;
  z-index: 5;
  position: relative;
  padding: 5rem;
  border-radius: var(--mainRadius);
  box-shadow: var(--mainShadow);

  .form-control {
    margin: 2rem 0;
  }

  .form-input {
    ${textStyles}
    width: 100%;
    outline: 0;
    border: 0;
    border-bottom: 0.1rem solid var(--grayishBlue);
    font-size: 1.6rem;
    padding: 1.5rem;
  }
`;

const SignUpForm = () => {
  return (
    <form>
      <Container>
        <div className="form-control">
          <input type="text" placeholder="Name..." className="form-input" />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email..." className="form-input" />
        </div>
        <div className="form-control">
          <select className="form-input">
            <option className="form-option">Basic Pack (Free)</option>
            <option className="form-option">Pro Pack ($9.99)</option>
            <option className="form-option">Ultimate Pack ($19.99)</option>
          </select>
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="Phone Number..."
            className="form-input"
            min="1"
          />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Company..." className="form-input" />
        </div>
        <div className="form-control">
          <Button primaryForm>Get on the list</Button>
        </div>
      </Container>
    </form>
  );
};

export default SignUpForm;
