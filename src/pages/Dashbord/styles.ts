import styled from 'styled-components';




export const Title = styled.div`

    max-width: 450px;
    margin-top: 60px;



    h1 {
      font-size: 36px;
    color: #3D3D3D;

    }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3D3D3D;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 5px;

      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;



    li {

      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 35px;
        color: #3D3D3D;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #3D3D3D;
      }
    }
  }
`;
export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d3d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

`;

export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      opacity: 0.6;

    }
  }

`;
