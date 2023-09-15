import styled from 'styled-components'

export const ListInfoCardContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      height: 18px;
      width: 18px;
      fill: ${(props) => props.theme.colors.BASE_LABEL};
    }
    span {
      font-size: ${(props) => props.theme.size.M};
      color: ${(props) => props.theme.colors.BASE_SUBTITLE};
    }
  }
`
