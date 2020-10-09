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

      a {
        display: block;
        font-size: 20px;
        color: #3D3D3D;
        transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
      }

      span {
        display: block;
        margin-top: 4px;
        color: #3D3D3D;
      }
    }
  }
`;
export const Pagination = styled.div`
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
