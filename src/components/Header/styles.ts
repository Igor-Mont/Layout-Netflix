import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;

  &.black {
    background-color: #141414;
  }

  .logo {
    height: 25px;

    img {
      height: 100%;
    }
  }

  .user {
    height: 35px;

    img {
      height: 100%;
      border-radius: 3px;
    }
  }
`;
