import styled from 'styled-components';

type ContainerProps = {
  path: string;
};

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-image: ${props => props.path};

  .transparency-vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    .transparency-horizontal {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 70px 0 150px 30px;

      .featured-name {
        font-size: 60px;
        font-weight: bold;
      }

      .featured-info {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;

        .featured-points {
          display: inline-block;
          color: #46d369;
          margin-right: 15px;
        }

        .featured-year {
          display: inline-block;
          margin-right: 15px;
        }

        .featured-seasons {
          display: inline-block;
        }
      }

      .featured-description {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
      }

      .featured-buttons {
        margin-top: 15px;

        .btn-watch {
          a {
            color: #111;
          }
        }

        .btn-watch,
        .btn-list {
          display: inline-block;
          font-size: 20px;
          font-weight: bold;
          border-radius: 5px;
          padding: 12px 25px;
          margin-right: 10px;
          border: none;
          transition: all ease 0.2s;

          &:hover {
            opacity: 0.7;
          }

          a {
            text-decoration: none;
          }
        }

        .btn-list {
          background-color: #333;
          a {
            color: #fff;
          }
        }
      }

      .featured-genres {
        margin-top: 15px;
        font-size: 18px;
        color: #999;
      }
    }
  }

  @media (max-width: 760px) {
    height: 90vh;

    .transparency-vertical {
      .transparency-horizontal {
        .featured-name {
          font-size: 40px;
        }

        .featured-info {
          font-size: 16px;
        }

        .featured-description {
          font-size: 14px;
          max-width: 100%;
          margin-right: 30px;
        }
        .featured-buttons {
          .btn-list,
          .btn-watch {
            a {
              font-size: 16px;
            }
          }
        }

        .featured-genres {
          font-size: 14px;
        }
      }
    }
  }
`;
