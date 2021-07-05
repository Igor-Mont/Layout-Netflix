import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }

  .movieRow-left,
  .movieRow-right {
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    cursor: pointer;
    opacity: 0;
    transition: opacity ease 0.4s;
    z-index: 5;
  }

  .movieRow-left {
    left: 0;
  }
  .movieRow-right {
    right: 0;
    z-index: 1;
  }

  &:hover .movieRow-left {
    opacity: 1;
  }
  &:hover .movieRow-right {
    opacity: 1;
  }

  @media (max-width: 760px) {
    .movieRow-left,
    .movieRow-right {
      opacity: 1;
    }
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;

  .list {
    display: flex;
    transition: all ease 0.5s;
    /* ou mudar pra inline block no .item */
  }

  .item {
    width: 150px;
    cursor: pointer;

    img {
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1);
      }
    }
  }
`;
