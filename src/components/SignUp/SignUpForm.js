import styled from "styled-components";
import { useForm } from "react-hook-form";
import { textStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";
import { headingStyles } from "../../abstracts/Mixins";

const Form = styled.form`
  background-color: var(--white);
  width: 600px;
  z-index: 5;
  position: relative;
  padding: 5rem;
  border-radius: var(--mainRadius);
  box-shadow: var(--mainShadow);

  ${Responsive.xl`
    width: 400px;
  `}

  ${Responsive.md`
    width: 100%;
  `}

  ${Responsive.xs`
    padding: 2rem;
  `}

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

  .form-message {
    display: inline-block;
    color: var(--red);
    font-size: 1.3rem;
    margin: 1rem 0;
  }

  .form-submit {
    ${headingStyles}
    border: 0;
    outline: 0;
    border-radius: var(--btnRadius);
    padding: 1.5rem 2.5rem;
    font-size: 1.6rem;
    display: inline-block;
    box-shadow: var(--mainShadow);
    transition: var(--mainTransition);
    cursor: pointer;
    position: relative;
    z-index: 5;
    width: 100%;
    background-color: var(--blue);
    color: var(--white);
    text-align: center;
    display: block;

    &:hover,
    &:focus {
      background-color: var(--lightBlue);
    }
  }
`;

const SignUpForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <article data-aos="fade-down" data-aos-delay="300">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <input
            {...register("name", { required: true })}
            type="text"
            autoComplete="off"
            placeholder="Name..."
            className="form-input"
          />
          {errors.name && (
            <small className="form-message">name is required.</small>
          )}
        </div>
        <div className="form-control">
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            type="email"
            autoComplete="off"
            placeholder="Email..."
            className="form-input"
          />
          {errors.email && (
            <small className="form-message">{errors.email.message}</small>
          )}
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
            {...register("phone", { required: true })}
            type="phone"
            placeholder="Phone Number..."
            className="form-input"
            min="0"
          />
          {errors.phone && (
            <small className="form-message">phone number is required.</small>
          )}
        </div>
        <div className="form-control">
          <input type="text" placeholder="Company..." className="form-input" />
        </div>
        <div className="form-control">
          <input
            type="submit"
            value="Get on the list"
            className="form-submit"
          />
        </div>
      </Form>
    </article>
  );
};

export default SignUpForm;
