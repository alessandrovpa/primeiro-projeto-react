import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 40px;
  max-width: 450px;
  line-height: 45px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 30px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    padding: 15px 20px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right: 0;
    ${(props) =>
      props.hasError &&
      css`
        border-color: red;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    padding: 15px 20px;
    border-radius: 0 5px 5px 0;
    border: 0;
    background: #04d361;
    color: white;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 50px;
  max-width: 700px;

  a {
    display: flex;
    background: #fff;
    padding: 24px;
    text-decoration: none;
    color: black;
    align-items: center;

    & + a {
      margin-top: 10px;
    }

    transition: 0.2s;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 0px 10px;
      /* transform: translateX(10px); */
      transition: 0.3s;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 20px;

      strong {
        font-size: 20px;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 6px;
      }
    }

    svg {
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 5px;
`;
