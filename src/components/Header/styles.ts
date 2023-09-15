import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;

  width: 100%;
  height: 18.5rem;

  background-color: ${(props) => props.theme.colors.BASE_HEADER};
  justify-content: space-between;

  img {
    max-width: 22rem;
    object-fit: none;
  }
  img.logo {
    align-self: flex-start;
    margin: 4rem;
  }
`
