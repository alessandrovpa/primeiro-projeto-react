import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  max-width: 700px;
  margin-top: 40px;
  header {
    display: flex;
    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }
    div {
      margin-left: 20px;
      flex: 1;

      strong {
        color: #3d3d4d;
      }
      p {
        color: #737380;
        margin-top: 12px;
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    margin-top: 20px;
    li {
      padding: 10px;
      strong {
        display: block;
        color: #3d3d4d;
        font-size: 36px;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }

      & + li {
        margin-left: 40px;
      }
    }
  }
`;

export const Issues = styled.section`
  margin-top: 50px;

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
