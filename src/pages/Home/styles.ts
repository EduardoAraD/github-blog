import styled from 'styled-components'

export const HomeInfo = styled.div`
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${(props) => props.theme.size.L};
    color: ${(props) => props.theme.colors.BASE_SUBTITLE};
  }
  span {
    font-size: ${(props) => props.theme.size.S};
    color: ${(props) => props.theme.colors.BASE_SPAN};
  }
`

export const Input = styled.input`
  display: flex;
  padding: 12px 16px;
  width: 100%;
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme.colors.BASE_INPUT};
  border: 1px solid ${(props) => props.theme.colors.BASE_BORDER};
  border-radius: 6px;

  font-size: ${(props) => props.theme.size.M};
  color: ${(props) => props.theme.colors.BASE_TEXT};

  &::placeholder {
    color: ${(props) => props.theme.colors.BASE_LABEL};
  }
`

export const ListPost = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
