import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.BASE_PROFILE};
  padding: 2rem;
  border-radius: 10px;
  gap: 2rem;

  img.card-profile {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
  div.card-info {
    display: flex;
    flex-direction: column;

    flex: 1;

    div.card-name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;

      span {
        color: ${(props) => props.theme.colors.BASE_TITLE};
        font-size: ${(props) => props.theme.size.XXL};
        font-weight: bold;
      }

      a {
        color: ${(props) => props.theme.colors.BLUE};
        font-size: ${(props) => props.theme.size.XS};
        font-weight: bold;
        text-decoration: none;
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
          margin-left: 6px;
          height: 12px;
          width: 12px;
          fill: ${(props) => props.theme.colors.BLUE};
        }
      }
    }

    p {
      font-size: ${(props) => props.theme.size.M};
      color: ${(props) => props.theme.colors.BASE_TEXT};
      margin-bottom: 1.5rem;

      overflow: hidden; /* remove o estouro do elemento */
      text-overflow: ellipsis; /* adiciona “...” no final */
      display: -webkit-box;
      -webkit-line-clamp: 3; /* quantidade de linhas */
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;

    .card-info {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    div.card-name {
      flex-direction: column;
      span {
        text-align: center;
      }
      a {
        margin-top: 0.4rem;
      }
    }
  }
`
