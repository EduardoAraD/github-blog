import styled from 'styled-components'

export const CardHeaderPostContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.colors.BASE_PROFILE};
  padding: 2rem;
  border-radius: 10px;

  div.card-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${(props) => props.theme.colors.BLUE};
      font-size: ${(props) => props.theme.size.XS};
      font-weight: bold;
      text-decoration: none;
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 6px;

      svg {
        height: 12px;
        width: 12px;
        fill: ${(props) => props.theme.colors.BLUE};
      }
    }
  }
  p {
    font-size: ${(props) => props.theme.size.XXL};
    color: ${(props) => props.theme.colors.BASE_TITLE};
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 400px) {
    div.card-options {
      flex-direction: column;

      a {
        padding: 0.4rem;
      }
    }
  }
`
