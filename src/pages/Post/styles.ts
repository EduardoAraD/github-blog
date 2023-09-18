import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px 30px;

  h1 {
    font-size: ${(props) => props.theme.size.XXL};
    line-height: 3rem;
    color: ${(props) => props.theme.colors.BASE_TITLE};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: ${(props) => props.theme.size.XL};
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.BASE_SUBTITLE};
    margin-bottom: 0.8rem;
    margin-top: 0.5rem;
  }
  h3 {
    font-size: ${(props) => props.theme.size.L};
    line-height: 2rem;
    color: ${(props) => props.theme.colors.BASE_SUBTITLE};
    margin-bottom: 0.6rem;
    margin-top: 0.3rem;
  }

  p {
    font-size: ${(props) => props.theme.size.M};
    line-height: 1.45rem;
    color: ${(props) => props.theme.colors.BASE_TEXT};
    margin-bottom: 0.5rem;
  }

  pre {
    padding: 16px;
    overflow: auto;
    font-size: 1rem;
    line-height: 1.45;
    color: ${(props) => props.theme.colors.BASE_SUBTITLE};
    background-color: ${(props) => props.theme.colors.BASE_POST};
    border-radius: 6px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
