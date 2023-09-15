import styled from 'styled-components'

export const CardPostContainer = styled.button`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: none;
  text-align: initial;

  background-color: ${(props) => props.theme.colors.BASE_POST};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.BASE_POST};

  cursor: pointer;
  transition: border-color 0.2s;

  div {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 1.25rem;

    p {
      flex: 1;
      font-size: ${(props) => props.theme.size.XL};
      color: ${(props) => props.theme.colors.BASE_TITLE};
    }
    span {
      font-size: ${(props) => props.theme.size.S};
      color: ${(props) => props.theme.colors.BASE_SPAN};
      margin-top: 4px;
    }
  }
  p {
    font-size: ${(props) => props.theme.size.M};
    color: ${(props) => props.theme.colors.BASE_TEXT};

    overflow: hidden; /* remove o estouro do elemento */
    text-overflow: ellipsis; /* adiciona “...” no final */
    display: -webkit-box;
    -webkit-line-clamp: 4; /* quantidade de linhas */
    -webkit-box-orient: vertical;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.BASE_LABEL};
  }
`
