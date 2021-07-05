import styled from 'styled-components';

export const Container = styled.div`
  section {
    margin-top: -150px;
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: -20px 0 20px 0;
    p {
      color: #898989;
      font-weight: bold;
    }
  }

  .loading {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
